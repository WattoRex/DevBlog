import React, { useState } from 'react';
import axios from 'axios';

// Import de GA
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const MeContacter = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nomPrenomRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { executeRecaptcha } = useGoogleReCaptcha(); // Déplacer le hook ici

    const sendDataToStrapi = async () => {
        try {

            const captchaToken = await executeRecaptcha("envoie_formulaire");

            if (!captchaToken) {
                console.error("Veuillez valider le captcha.");
                return;
            }


            const response = await axios.post(`${process.env.REACT_APP_STRAPI_API_URL}/api/contacts`, {
                data: {
                    Nom: nom,
                    Prenom: prenom,
                    Email: email.trim(),
                    Message: message
                }
            });
            console.log(response.data);
            resetForm(); // Réinitialiser le formulaire
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données à Strapi:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nomPrenomRegex.test(nom) && nomPrenomRegex.test(prenom) && emailRegex.test(email)) {
            sendDataToStrapi();
        } else {
            alert('Veuillez vérifier les champs du formulaire.');
        }
    };

    const handleChangeNom = (e) => {
        const value = e.target.value;
        if (nomPrenomRegex.test(value)) {
            setNom(value);
        }
    };

    const handleChangePrenom = (e) => {
        const value = e.target.value;
        if (nomPrenomRegex.test(value)) {
            setPrenom(value);
        }
    };

    const handleKeyPress = (e) => {
        const regex = /^[a-zA-Z0-9\s]*$/;
        if (!regex.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleChangeEmail = (e) => {
        const value = e.target.value.replace(/\s/g, ''); // Supprime tous les espaces
        setEmail(value);
    };


    const resetForm = () => {
        setNom('');
        setPrenom('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="me-contacter-container">
            <h2>Me Contacter</h2>
            <form onSubmit={handleSubmit}>
                <div className='group-nom-prenom'>
                    <div className="form-group">
                        <label htmlFor="nom">Nom:</label>
                        <input
                            type="text"
                            id="nom"
                            value={nom}
                            onChange={handleChangeNom}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom:</label>
                        <input
                            type="text"
                            id="prenom"
                            value={prenom}
                            onChange={handleChangePrenom}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleChangeEmail}
                        required
                        maxLength={62}
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        required
                        pattern="[a-zA-Z0-9\s]*"
                        maxLength={600}
                    ></textarea>
                </div>
                <div onClick={handleSubmit} className='form-submit'>Envoyer</div>
            </form>
        </div>
    );
};

const LoginFormWithRecaptcha = () => (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_SITE_KEY}>
        <MeContacter />
    </GoogleReCaptchaProvider>
);

export default LoginFormWithRecaptcha;

// export default MeContacter;
