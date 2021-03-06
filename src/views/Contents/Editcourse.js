/********************This is 5 page***************************** */
import react, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import StyledCheckbox from "../../components/Checkbox.js";
import "../../assets/css/login.css";

export default function Editor() {
  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };
  const Handle_Save = () => {
    history.push("/");
  };
  const [sigla, setSigla] = useState("");
  const [description, setDescription] = useState("");
  const [vender, setVender] = useState("");
  const [remote, setRemote] = useState("");
  const Handle_Setsigla = (e) => {
    setSigla(e.target.value);
  };
  const Handle_Description = (e) => {
    setDescription(e.target.value);
  };
  const Handle_Vender = (e) => {
    setVender(e.target.value);
  };
  const Handle_Remote = (e) => {
    setRemote(e.target.value);
  };
  return (
    <div className="main-container">
      <div className="pdr-38 editcourse">
        <button className="but_back" onClick={Back_fun}>
          <i className="fas fa-chevron-left img_back"></i>
        </button>
        <div className="Edit-ft1 mgt-50 none-mobile">MÉTODO REMOTO 3.0</div>
        <div className="Edit-ft2">Editar Curso</div>
        <div className="d-flex mgt-50 ">
          <div className="mgr-20">
            <div className="Edit-ft3">Nome do curso</div>
            <input
              type="text"
              className="Edit-warp mgt-15 wd-674 Edit-ft4"
              placeholder="Método Remoto 3.0"
              value={remote}
              onChange={Handle_Remote}
            />
          </div>
          <div className="">
            <div className="Edit-ft3">Sigla</div>
            <input
              type="text"
              className="Edit-warp mgt-15 Edit-ft4 wd-118"
              placeholder="MR3"
              value={sigla}
              onChange={Handle_Setsigla}
            />
          </div>
        </div>
        <div className="Edit-ft3 mgt-50">URL da página de vendas</div>
        <input
          type="text"
          className="Edit-warp mgt-15 Edit-ft4 w-100"
          placeholder="https://metodoremoto.com.br/"
          value={vender}
          onChange={Handle_Vender}
        />
        <div className="Edit-ft3 mgt-50">Descrição do curso</div>
        <div>
          <textarea
            className="Edit-warp mgt-15 ht-200 Edit-ft4 w-100 "
            placeholder="Treinamento MR 3.0 foi criado para ajudar pessoas a conseguirem prestar serviço online."
            value={description}
            onChange={Handle_Description}
          />
        </div>
        <div className="d-flex mgt-50">
          <div className="">
            <StyledCheckbox />
          </div>
          <div className="">
            <div className="Edit-ft3">Ativar moderação de comentários</div>
            <div className="Edit-ft5 mgt-10">
              Todos os comentários serão revisados por seus administradores.
            </div>
          </div>
        </div>
        <div className="align-items-center mgt-50 mgb-169 cancel_save_btngroup">
          <div className="col-12 col-sm-6 text-center pl-1 pr-1">
            <div className="but_save " onClick={Handle_Save}>
              Salvar edição
            </div>
          </div>
          <div className="col-12 col-sm-6 Edit-ft4 mgl-190">Cancelar</div>
        </div>
      </div>
    </div>
  );
}
