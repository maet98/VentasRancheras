import React from 'react';
import api from '../../api/api';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import '../login/style.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router-dom';
import rutasImg from '../../images/ruta.svg';
import {
	Table,
	TableRow,
	Checkbox,
	TableHead,
	TableBody,
	TableCell,
	withStyles,
	Button,
	TextField,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export default function VerOrdenes() {
	const [available, setAvailable] = React.useState([]);
	const [priority, setPriority] = React.useState({});
	const [selected, setSelected] = React.useState(new Map());
	const [employee, setEmployee] = React.useState({});
	const [customers, setCustomers] = React.useState([]);
	let { id } = useParams();

	const classes = useStyles();
	React.useEffect(() => {
		api
			.order()
			.getAvailable()
			.then(res => {
				var obj = new Map();
				var prio = {};
				for (let i = 0; i < res.data.orders.length; i++) {
					obj.set(res.data.orders[i].Id, false);
					prio[res.data.orders[i].Id] = 0;
				}
				console.log(res.data);
				setSelected(obj);
				setPriority(prio);
				setAvailable(res.data.orders);
			});
		api
			.employee()
			.getById(id)
			.then(res => {
				console.log(res.data);
				setEmployee(res.data);
			});
		api
			.client()
			.getAll()
			.then(res => {
				console.log(res.data);
				setCustomers(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	const handleSubmit = () => {
		console.log(priority);
		var orders = new Map();
		var clients = {};
		for (let i = 0; i < available.length; i++) {
			var x = available[i];
			x.index = i;
			orders.set(available[i].Id, x);
		}
		for (let i = 0; i < customers.length; i++) {
			var x = customers[i];
			x.index = i;
			clients[customers[i].Id.toString()] = customers[i];
		}
		var stops = [];
		var iterator = selected.entries();
		for (let i = 0; i < selected.size; i++) {
			const actual = iterator.next().value;
			if (actual[1]) {
				const clientId = parseInt(orders.get(actual[0]).CustomerRef.value);
				console.log(clients[clientId].ShipAddr);
				const entry = {
					latitude: clients[clientId].ShipAddr.Line1,
					longitude: clients[clientId].ShipAddr.Line2,
					orderId: parseInt(orders.get(actual[0]).Id),
					priority: priority[actual[0]],
				};
				stops.push(entry);
			}
		}
		if (stops.length === 0) {
			alert('Debe seleccionar alguna orden');
		} else {
			var data = {
				user: id,
				stops: stops,
			};
			console.log(data);
			api.route().create(data);
			window.location = '/programarRutas';
		}
	};

	const handleChange = e => {
		setSelected(selected.set(e.target.name, e.target.checked));
	};

	const handlePriorityChange = e => {
		var temp = priority;
		temp[parseInt(e.target.name)] = parseInt(e.target.value);
		setPriority({ ...temp });
	};

	const StyledTableCell = withStyles(theme => ({
		head: {
			backgroundColor: theme.palette.common.blue,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	}))(TableCell);

	return (
		<div>
			<div className='base-container'>
				<div className='header'>Asignar Ordenes al Repartidor: {id}</div>
				<div className='content'>
					<div className='image'>
						<img className='centrado' src={rutasImg} alt='desc' />
					</div>
				</div>
				<Button onClick={handleSubmit}>print</Button>
			</div>

			{available.map((record, id) => {
				return (
					<ExpansionPanel key={id}>
						<ExpansionPanelSummary
							className='centrado'
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1a-content'
							id='panel1a-header'>
							<Typography className={classes.heading}>
								{id + ':  ' + record.CustomerRef.name + '				' + record.TxnDate}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div>
								<h3>Items:</h3>
								<br />
								<Table className={classes.table} aria-label='customized table'>
									<TableHead>
										<TableRow>
											<StyledTableCell align='right'>Id</StyledTableCell>
											<StyledTableCell align='right'>Name</StyledTableCell>
											<StyledTableCell align='right'>Qty</StyledTableCell>
											<StyledTableCell align='right'>Ammount</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{record.Line.map((other, index) => {
											return 'SalesItemLineDetail' in other ? (
												<TableRow key={index}>
													<TableCell>{other.Id}</TableCell>
													<TableCell>
														{other.SalesItemLineDetail.ItemRef.name}
													</TableCell>
													<TableCell>{other.SalesItemLineDetail.Qty}</TableCell>
													<TableCell>{other.Amount}</TableCell>
												</TableRow>
											) : null;
										})}
									</TableBody>
								</Table>
								<Checkbox
									checked={selected.get(record.id)}
									onChange={handleChange}
									name={record.Id}
									inputProps={{ 'arial-label': 'primary checkbox' }}>
									Seleccionar?
								</Checkbox>
								<TextField
									variant='outlined'
									name={record.Id}
									value={priority[record.Id]}
									onChange={handlePriorityChange}
									label='Priority'
									type='number'
								/>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				);
			})}
			<Button variant='contained' onClick={handleSubmit}>
				Realizar Ruta
			</Button>
		</div>
	);
}
