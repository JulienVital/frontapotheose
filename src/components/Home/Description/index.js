import React from 'react';

import logo from 'src/assets/img/logo.png';

import './style.scss';

const Description = () => (
  <section className="Description">
    <div className="Description__page">
      <h1 className="Description__page--title">"L’appothéose", l’une des étapes les plus importantes de la formation</h1>
      <p className="Description__page--text">
        Lyra étant une double promotion : on dégaine un dispositif exceptionnel.
        Au menu : deux lives simultanés par jour le 9 et le 10 février.
        On commence le 9 avec les groupes Blue et on enchainera le 10 février avec les Red.
        Lyra étant une double promotion : on dégaine un dispositif exceptionnel.
        Au menu : deux lives simultanés par jour le 9 et le 10 février.
        On commence le 9 avec les groupes Blue et on enchainera le 10 février avec les Red.
      </p>
      <iframe
        title="youtube_video"
        src="https://www.youtube.com/embed/gI-UPLSyH98"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="Description__page--video"
      />
    </div>
    <div className="Description__school">
      <img src={logo} alt="" className="Description__school--image" />
      <p className="Description__school--textEcole">
        Envie de découvrir cette fabuleuse école qu’est O’clock ?
        Tu veux comprendre son fonctionnement et découvrir les formations proposées ?
        Alors ce lien est fait pour toi &#128521;
      </p>
      <button
        type="button"
        className="Description__school--button"
        onClick={() => {
          window.open('https://oclock.io/');
        }}
      >
        VOIR LE SITE
      </button>
    </div>
  </section>
);

export default Description;
