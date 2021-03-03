import React, { useState } from 'react';

import Input from 'src/components/Assets/Input';
import Button from 'src/components/Assets/Button';
import TextArea from 'src/components/Assets/TextArea';
import Dropdown from 'src/components/Assets/DropDown';
import Radio from 'src/components/Assets/Radio';

import './style.scss';

const SubscribeForm = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangeSubscribePage = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
    else {
      setCurrentPage(1);
    }
  };

  return (
    <form action="" className="formSubscribe">
      <div className="formSubscribe__stape"><p>Étape {currentPage}/2</p></div>
      {currentPage === 1 && (
      <div className="formSubscribe__fields">
        <Input
          inputColor="dark"
          isLabel
          label="NOM"
          placeholder="Votre nom"
          type="text"
          name="lastname"
          className="formSubscribe__fields--input"
        />
        <Input
          inputColor="dark"
          isLabel
          label="PRÉNOM"
          placeholder="Votre prénom"
          type="text"
          name="firstname"
          className="formSubscribe__fields--input"
        />
        <Input
          inputColor="dark"
          isLabel
          label="MAIL"
          placeholder="Votre Mail"
          type="password"
          name="mail"
          className="formSubscribe__fields--input"
        />
        <Input
          inputColor="dark"
          isLabel
          label="MOT DE PASSE"
          placeholder="Votre mot de passe"
          type="password"
          name="password"
          className="formSubscribe__fields--input"
        />
      </div>
      )}

      {currentPage === 2 && (
      <div className="formSubscribe__fields">
        <TextArea
          inputColor="dark"
          isLabel
          label="DESCRIPTION DE TON PROFIL"
          placeholder="D'écrit toi en quelque mots ;)"
          type="text"
          name="lastname"
          className="formSubscribe__fields--input"
        />
        <Dropdown
          inputColor="dark"
          isLabel
          label="VOS TECHNOS"
          placeholder="Choisissez "
          type="text"
          name="techno"
          selectedValues={[{ id: 2, name: 'Javascript' }]}
          className="formSubscribe__fields--input"
          options={[{ id: 1, name: 'Php' }, { id: 2, name: 'Javascript' }]}
        />
        <Radio
          isLabel
          label="ORIENTATION"
          name="orientation"
          className="formSubscribe__fields--input"
          options={[{ id: 1, name: 'Front-end' }, { id: 2, name: 'Back-end' }]}
        />
        <Radio
          isLabel
          label="QUEL TYPE D'EMPLOI RECHERCHES-TU ?"
          name="contractType"
          className="formSubscribe__fields--input"
          options={[{ id: 1, name: 'CDI' }, { id: 2, name: 'Stage' }]}
        />
        <Dropdown
          inputColor="dark"
          isLabel
          label="QUELS TYPES DE CONTRAT RECHERCHE-TU ?"
          placeholder="Votre prénom"
          type="text"
          name="firstname"
          className="formSubscribe__fields--input"
          selectedValues={[{ id: 2, name: 'CDI' }]}
          options={[{ id: 1, name: 'CDI' }, { id: 2, name: 'STAGE' }]}
        />
      </div>
      )}

      {currentPage === 1 && (
      <div className="formSubscribe__control">
        <Button
          text="SUIVANT"
          buttonColor="dark"
          isPlain
          type="button"
          className="formSubscribe__control--button"
          onClick={handleChangeSubscribePage}
        />
      </div>
      )}

      {currentPage === 2 && (
      <div className="formSubscribe__control">
        <Button
          text="PRÉCÉDENT"
          buttonColor="dark"
          isPlain={false}
          type="button"
          className="formSubscribe__control--button"
          onClick={handleChangeSubscribePage}
        />
        <Button
          text="M'INSCRIRE"
          buttonColor="dark"
          isPlain
          type="button"
          className="subscribe formSubscribe__control--button"
        />
      </div>
      )}
    </form>
  );
};

export default SubscribeForm;
