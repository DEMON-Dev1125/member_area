/**********************This is 9 page************ */
import react, { useState } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import TextWYSIWYG from "../../components/Wysiwyg";
import Fileupload from "../../components/Fileupload";
import StyledCheckbox from "../../components/Checkbox.js";
import DelteContentDialog from "./Deletecontentdialog.js";
import "../../assets/css/login.css";

export default function EditContent() {
  const history = useHistory();
  const Back_fun = () => {
    history.goBack();
  };
  const [title, setTitle] = useState("");
  const Handle_Title = (e) => {
    setTitle(e.target.value);
  };
  const [contenttext, setContenttext] = useState("");
  const Handle_ContentText = (e) => {
    setContenttext(e.target.value);
  };
  const Handle_Save = () => {
    history.push("/main/content/improve");
  };
  return (
    <div className="main-container">
      <div className="pdr-38">
        <button className="but_back" onClick={Back_fun}>
          <i className="fas fa-chevron-left img_back"></i>
        </button>
        <div className="Edit-ft1 mgt-50">MÉTODO REMOTO 3.0</div>
        <div className="Edit-ft2">Editar conteúdo</div>
        <div className="Edit-ft3 mgt-50">Título do conteúdo</div>
        <input
          type="text"
          className="Edit-warp mgt-15 Edit-ft4 w-100"
          placeholder="Como melhorar o seu Aprendizado?"
          value={title}
          onChange={Handle_Title}
        />
        <div className="Edit-ft3 mgt-50">Módulo do conteúdo</div>
        <TextWYSIWYG />
        <div className="Edit-ft3 mgt-50">Link do vídeoo</div>
        <input
          type="text"
          className="Edit-warp mgt-15 Edit-ft4 w-100"
          placeholder="https://www.youtube.com/watch?v=Gbc"
          value={contenttext}
          onChange={Handle_ContentText}
        />
        <div className="Edit-ft3 mgt-50">Arquivos</div>
        <Fileupload />
        <div className="d-flex mgt-50">
          <div className="">
            <StyledCheckbox />
          </div>
          <div className="">
            <div className="Edit-ft3">Desativar comentários</div>
            <div className="Edit-ft5 mgt-10">
              A seção de comentários ficará para todos os membros do curso.
            </div>
          </div>
        </div>
        <div className="but_scd desktop">
          <div className="add_but but_save_edit" onClick={Handle_Save}>
            Salvar edição
          </div>
          <div className="con-ft3 but_cancel">Cancelar</div>
          <DelteContentDialog />
        </div>
        <div className="group-mobile">
          <div className="add_but but_save_edit marginx1" onClick={Handle_Save}>
            Salvar edição
          </div>
          <div className="d-flex ">
            <DelteContentDialog />
            <div className="but_cancel">cancelar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
