import React, { useState, useEffect } from 'react';
import '../login/style.scss';
import { Button } from 'react-bootstrap';
import api from '../../api/api';
import {
	Grid,
	makeStyles,
	Card,
	CardActionArea,
	CardContent,
	Typography,
	CardActions,
	Select,
	MenuItem,
} from '@material-ui/core';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function VerClientes(props) {
	const [clients, setClients] = useState([]);
	const classes = useStyles();
	const [available, setAvailable] = useState([]);
	let { id } = useParams();
	var [priority, setPriority] = useState({});
	const [original, setOriginal] = useState({});

	useEffect(() => {
		api
			.employee()
			.getClients(id)
			.then(ans => {
				var arr = {};
				for (let i = 0; i < ans.data.length; i++) {
					arr[ans.data[i].Id] = 0;
					original[ans.data[i].Id] = true;
				}
				setOriginal({ ...original });
				setPriority({ ...arr });
				setClients(ans.data);
			})
			.catch(err => {
				console.log(err);
			});
		api
			.client()
			.getAvailable()
			.then(ans => {
				setAvailable(ans.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	const handleChange = id => {
		const c = available.find(x => x.Id === id);
		setAvailable([...available.filter(x => x.Id !== id)]);
		clients.push(c);
		priority[id] = 0;
		setClients([...clients]);
	};

	const otherWay = id => {
		const c = clients.find(x => x.Id === id);
		setClients([...clients.filter(x => x.Id !== id)]);
		available.push(c);
		setAvailable([...available]);
	};

	const onSubmit = () => {
		var stops = [];
		for (let i = 0; i < clients.length; i++) {
			console.log(clients[i].ShipAddr);
			stops.push({
				priority: priority[clients[i].Id],
				latitude: clients[i].ShipAddr.Line1,
				longitude: clients[i].ShipAddr.Line2,
				client: parseInt(clients[i].Id),
			});
		}
		var data = {
			user: id,
			stops: stops,
		};
		api
			.route()
			.create(data)
			.then(ans => {
				console.log(ans);
			})
			.catch(err => {
				console.log(err);
			});
		window.location = '/menu';
	};

	const handleSelect = event => {
		priority[event.target.name] = event.target.value;
		setPriority({ ...priority });
	};

	return (
		<div>
			<Grid container justify='center' className={classes.root} spacing={12}>
				<Grid item xs={12}>
					<h3>Clientes Displonibles:</h3>
					{available.length === 0 ? (
						<h3>No tiene</h3>
					) : (
						available.map((ac, id) => {
							return (
								<Card key={id} className={classes.root}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												{ac.CompanyName}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button
											size='small'
											color='primary'
											onClick={() => handleChange(ac.Id)}>
											Asignar?
										</Button>
									</CardActions>
								</Card>
							);
						})
					)}
				</Grid>

				<Grid item spacing={2}>
					<h3>Clientes de este vendedor:</h3>
					{clients.length === 0 ? (
						<h3>No tiene</h3>
					) : (
						clients.map((ac, id) => {
							return (
								<Card key={id} className={classes.root}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												{ac.CompanyName}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button
											disabled={original[ac.Id]}
											size='small'
											color='primary'
											onClick={() => otherWay(ac.Id)}>
											Devolver?
										</Button>
										<Select
											id={ac.Id}
											name={ac.Id}
											label='prioridad'
											variant='outlined'
											value={priority[ac.Id]}
											onChange={handleSelect}>
											{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, id) => {
												return <MenuItem value={value}>{value}</MenuItem>;
											})}
										</Select>
									</CardActions>
								</Card>
							);
						})
					)}
				</Grid>
			</Grid>
			<Button onClick={onSubmit}>Asignar</Button>
		</div>
	);
}
