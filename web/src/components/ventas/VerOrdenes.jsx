import React from "react";
import api from "../../api/api";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import "../login/style.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useParams } from "react-router-dom";
import rutasImg from "../../images/ruta.svg";
import {
	Table,
	TableRow,
	Checkbox,
	TableHead,
	TableBody,
	TableCell,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
}));

export default function VerOrdenes() {
	const [available, setAvailable] = React.useState([]);
	const [selected, setSelected] = React.useState(new Map());
	const [employee, setEmployee] = React.useState();
	let { id } = useParams();

	const classes = useStyles();
	React.useEffect(() => {
		api
			.order()
			.getAvailable()
			.then((res) => {
				var obj = new Map();
				for (let i = 0; i < res.data.orders.length; i++) {
					obj[res.data.orders[i].Id] = false;
				}
				setSelected(obj);
				setAvailable(res.data.orders);
			});
		api
			.employee()
			.getById(id)
			.then((res) => {
				console.log(res.data);
				setEmployee(res.data);
			});
	}, []);

	const handleSubmit = () => {
		for (var i in selected) {
			console.log(i);
		}
	};

	const handleChange = (e) => {
		setSelected(selected.set(e.target.name, e.target.checked));
	};

	return (
		<div>
			<div className="base-container">
				<div className="header">Asignar Ordenes al cliente:</div>
				<div className="content">
					<div className="image">
						<img className="centrado" src={rutasImg} alt="desc" />
					</div>
				</div>
				<Button onClick={handleSubmit}>print</Button>
			</div>

			{available.map((record, id) => {
				return (
					<ExpansionPanel key={id}>
						<ExpansionPanelSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Checkbox
								checked={selected.get(record.id)}
								onChange={handleChange}
								name={record.Id}
								inputProps={{ "arial-label": "primary checkbox" }}
							/>
							<Typography classname={classes.heading}>
								{id + ":  " + record.CustomerRef.name + "				" + record.TxnDate}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<div>
								<h3>Items:</h3>
								<br />
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Id</TableCell>
											<TableCell>Name</TableCell>
											<TableCell>Qty</TableCell>
											<TableCell>Ammount</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{record.Line.map((other, index) => {
											console.log(other);
											return "SalesItemLineDetail" in other ? (
												<TableRow key={index}>
													<TableCell>{other.Id}</TableCell>
													<TableCell>{other.SalesItemLineDetail.ItemRef.name}</TableCell>
													<TableCell>{other.SalesItemLineDetail.Qty}</TableCell>
													<TableCell>{other.Amount}</TableCell>
												</TableRow>
											) : null;
										})}
									</TableBody>
								</Table>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				);
			})}
		</div>
	);
}
