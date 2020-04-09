const QBO = require("../../ERP/index");
import { employee } from "../models/employee";
import config from "config";
import bcrypt, { hashSync, compareSync } from "bcrypt";
import { employeeCustomer } from "../models/employee-customer";
import jwt from "jsonwebtoken";

export async function getAll(req, res) {
	const qbo = await QBO.getQbo();
	qbo
		.findEmployees(
			{
				fetchAll: true,
			},
			(err, ans) => {
				if (err) {
					return res.status(400).json(err);
				}
				employee.findAll().then((resp) => {
					console.log(resp);
					var map = new Map();
					for (let i = 0; i < resp.length; i++) {
						console.log(resp[i].dataValues.employeeId);
						console.log(resp[i].dataValues.type);
						map.set(resp[i].dataValues.employeeId, resp[i].dataValues.type);
					}
					ans = ans.QueryResponse.Employee;
					var arr = [];
					for (let i = 0; i < ans.length; i++) {
						console.log(map.get());
						if (map.get(parseInt(ans[i].Id)) !== "Supervisor") {
							arr.push(ans[i]);
						}
					}
					res.json(arr);
				});
			}
		)
		.catch((err) => res.status(400).json(err));
}

export async function filterName(req, res) {
	const qbo = await QBO.getQbo();
	var name = req.params.name;
	name = "%" + name + "%";
	qbo.findEmployees(
		[
			{
				field: "fetchAll",
				value: true,
			},
			{
				field: "DisplayName",
				value: name,
				operator: "LIKE",
			},
		],
		(err, employees) => {
			if (err) {
				return res.status(400).json(err);
			}
			res.json(employees.QueryResponse);
		}
	);
}

export async function getById(req, res) {
	const qbo = await QBO.getQbo();
	console.log(req.params.Id);
	employee
		.findAll({
			where: {
				employeeId: req.params.Id,
			},
			limit: 1,
		})
		.then((ans) => {
			if (ans.length === 0) {
				res.json({
					msg: "There is not Employee with that id: " + req.params.Id,
				});
			} else {
				qbo.getEmployee(req.params.Id, (err, obj) => {
					if (err) {
						return res.status(400).json(err);
					}
					console.log();
					res.json({
						...ans[0].dataValues,
						...obj,
					});
				});
			}
		})
		.catch((err) => {
			res.status(400).json(err);
		});
}

export async function createEmployee(req, res) {
	const qbo = await QBO.getQbo();
	const newEmployee = {
		GivenName: req.body.firstName + " " + req.body.lastName,
		FamilyName: req.body.lastName,
	};
	qbo.createEmployee(newEmployee, (err, ans) => {
		if (err) {
			return res.status(400).json(err);
		}
		const dbEmployee = {
			employeeId: ans.Id,
			username: req.body.username,
			email: req.body.email,
			password: req.body.password,
			type: req.body.type,
		};
		employee
			.create(dbEmployee)
			.then((resp) => {
				res.json(resp);
			})
			.catch((err) => {
				qbo.deleteEmployee(ans.Id, (err, ans) => {
					if (err) {
					} else {
						res.status(400).json(err);
					}
				});
			});
	});
}

export function login(req, res) {
	const { email, password } = req.body;
	employee
		.findAll({
			where: {
				email: email,
			},
		})
		.then(async (ans) => {
			if (compareSync(password, ans[0].password)) {
				console.log(ans[0].employeeId);
				const qbo = await QBO.getQbo();
				qbo.getEmployee(ans[0].employeeId.toString(), (err, customer) => {
					if (err) {
						return res.status(400).json(err);
					}
					customer.type = ans[0].type;
					customer.email = ans[0].email;
					res.json(customer);
				});
			} else {
				res.status(400).json({
					ok: false,
				});
			}
		})
		.catch((err) => {
			res.status(400).json({
				msg: `User not found with that email: ${email}`,
			});
		});
}

export async function getCustomer(req, res) {
	const id = req.params.Id;
	const qbo = await QBO.getQbo();
	qbo.findCustomers(
		{
			fetchAll: true,
		},
		(err, ans) => {
			if (err) {
				return res.status(400).json(err);
			}
			var customers = ans.QueryResponse.Customer;
			var arr = [];
			employeeCustomer
				.findAll({
					where: {
						employeeId: id,
					},
				})
				.then((employee) => {
					for (let i = 0; i < customers.length; i++) {
						let can = false;
						for (let j = 0; j < employee.length; j++) {
							if (employee[j].dataValues.CustomerId == customers[i].Id) {
								can = true;
								break;
							}
						}
						if (can) {
							arr.push(customers[i]);
						}
					}
					return res.json(arr);
				});
		}
	);
}
