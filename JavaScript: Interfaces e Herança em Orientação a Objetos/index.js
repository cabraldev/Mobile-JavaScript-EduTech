import { User } from "./User.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Paulão", 10000, 132342342);
diretor.cadastrarSenha("diretorescola2021$");

const gerente = new Gerente("Robertão", 5000, 12313213);
gerente.cadastrarSenha("gerenteescola2021$");

const cliente = new User ("Robertinha", 15000, "1999");


const logCliente = SistemaAutenticacao.login(cliente, "1999");
const log = SistemaAutenticacao.login(diretor, "diretorescola2021$");
const logGerente = SistemaAutenticacao.login(gerente, "gerenteescola2021$");


console.log(log, logGerente);