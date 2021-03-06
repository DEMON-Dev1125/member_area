/***************This is 6 page******************** */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "../../assets/img/ios-close.svg";
import AddIcon from "../../assets/img/add_icon.svg";

export default function AddMoudle() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [namemarket, setNamemarket] = useState("true");
  const Handle_NameMarket = () => {
    setNamemarket(!namemarket);
  };
  return (
    <div>
      <div className="con-ft4" onClick={handleClickOpen}>
        Novo módulo
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="false"
        PaperProps={{ style: { borderRadius: 20 } }}
      >
        <div className="dialog_container">
          <div className=" d-flex align-items-center">
            <div
              className="mr-auto"
              onClick={() => {
                history.push("/main/content/editor");
              }}
            >
              <img className="add_icon" src={AddIcon}></img>
            </div>
            <div className="mobile-position" onClick={handleClose}>
              <img className="close_icon" src={CloseIcon} />
            </div>
          </div>
          <div className="Edit-ft6 mgt-50">Adicionar módulo</div>
          <div className="con-ft5 mgt-30">Nome do módulo</div>
          <div className="Edit-warp mgt-15" onClick={Handle_NameMarket}>
            {namemarket ? (
              <div className="Edit-ft4">Nome do módulo</div>
            ) : (
              <div className="market">Descobrindo o Mercado</div>
            )}
          </div>
          <div className="mgt-50">
            <div className="add_but add_pd">Adicionar módulo</div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
