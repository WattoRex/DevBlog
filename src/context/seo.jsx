// eslint-disable-next-line
import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords, canonicalUrl, author }) => {
  useEffect(() => {
    // Met à jour le titre de la page
    document.title = title || "Titre par défaut";

    // Met à jour la balise méta de la description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      // Si la balise existe, met à jour son contenu avec la description fournie ou une valeur par défaut
      metaDescription.content = description || "Description par défaut";
    } else {
      // Si la balise n'existe pas, crée une nouvelle balise méta avec le nom 'description' et le contenu fourni ou une valeur par défaut
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = description || "Description par défaut";
      document.head.appendChild(newMetaDescription);
    }

    // Met à jour les balises méta des mots-clés
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      // Si la balise existe, met à jour son contenu avec les mots-clés fournis ou une valeur par défaut
      metaKeywords.content = keywords || "Mots clés par défaut";
    } else {
      // Si la balise n'existe pas, crée une nouvelle balise méta avec le nom 'keywords' et le contenu fourni ou une valeur par défaut
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = keywords || "Mots clés par défaut";
      document.head.appendChild(newMetaKeywords);
    }

    // Met à jour la balise méta canonique
    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      // Si la balise existe, met à jour son attribut href avec l'URL canonique fournie ou l'URL actuelle par défaut
      linkCanonical.href = canonicalUrl || window.location.href;
    } else {
      // Si la balise n'existe pas, crée une nouvelle balise link avec le rel 'canonical' et l'attribut href fourni ou l'URL actuelle par défaut
      const newLinkCanonical = document.createElement('link');
      newLinkCanonical.rel = 'canonical';
      newLinkCanonical.href = canonicalUrl || window.location.href;
      document.head.appendChild(newLinkCanonical);
    }

    // Met à jour la balise méta de l'auteur
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
      metaAuthor.content = author || "";
    } else {
      const newMetaAuthor = document.createElement('meta');
      newMetaAuthor.name = 'author';
      newMetaAuthor.content = author || "";
      document.head.appendChild(newMetaAuthor);
    }

  }, [title, description, keywords, canonicalUrl, author]);

  return null; // Ce composant ne rend rien dans l'interface
};

export default SEO;
