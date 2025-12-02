import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  fr: {
    translation: {
      image: { placeholder: 'Espace image (ajouter plus tard)' },
      brand: {
        name: 'SNDP – Société Nationale des Domaines Privés'
      },
      nav: {
        terrains: 'Terrains',
        why: 'Pourquoi SNDP ?',
        diaspora: 'Diaspora',
        contact: 'Contact',
        home: "Aller à l'accueil",
        openMenu: 'Ouvrir le menu'
      },
      cta: {
        whatsapp: 'Discuter sur WhatsApp',
        viewTerrains: 'Voir les terrains disponibles',
        propose: 'Proposer un terrain à SNDP',
        viewAllTerrains: 'Voir tous les terrains',
        talkDiaspora: 'Parler à un conseiller diaspora',
        send: 'Envoyer',
        sendTerrain: 'Envoyer mon terrain à l’étude'
      },
      search: {
        title: 'Rechercher un terrain',
        location: 'Localisation',
        type: 'Type',
        minPrice: 'Prix min',
        maxPrice: 'Prix max',
        any: 'Tous',
        types: { any: 'Tous', residential: 'Résidentiel', agro: 'Agro', industrial: 'Industriel', tourism: 'Tourisme' },
        button: 'Rechercher'
      },
      hero: {
        title: 'SNDP – Société Nationale des Domaines Privés',
        subtitle: 'Acquisition, sécurisation et mise en valeur de terrains au Cameroun, pour les résidents et la diaspora.',
        foot: 'Titres sécurisés – Accompagnement notarial – Processus transparent'
      },
      terrains: {
        title: 'Quelques domaines actuellement disponibles',
        subtitle: 'Aperçu de nos offres. Contactez-nous pour une sélection détaillée selon votre usage et votre budget.',
        location: 'Localisation',
        area: 'Superficie',
        usage: 'Usage recommandé',
        viewSheet: 'Voir la fiche'
      },
      status: {
        available: 'Disponible',
        reserved: 'Réservé',
        underReview: 'En étude'
      },
      ui: {
        addFavorite: 'Ajouter aux favoris'
      },
      why: {
        title: 'Pourquoi confier vos projets fonciers à la SNDP ?',
        secure: { title: 'Sécurisation juridique', desc: 'Titres fonciers, accompagnement notarial, vérification des antécédents fonciers.' },
        longterm: { title: 'Approche long terme', desc: 'Nous développons des domaines pensés pour 20, 50, 100 ans.' },
        local: { title: 'Réseau local', desc: 'Chefferies, mairies, cadastre, autorités administratives : un ancrage local fort.' },
        transparency: { title: 'Transparence & traçabilité', desc: 'Dossiers complets, documents clairs, suivi de chaque étape de la transaction.' }
      },
      diaspora: {
        title: 'Vous vivez au Canada, en Europe ou aux États-Unis ?',
        subtitle: 'Achat de parcelles à distance, dossiers complets pour les banques et accompagnement à chaque étape.',
        bank: 'Dossiers complets pour les banques',
        communications: 'Communication WhatsApp, email, visio',
        visits: 'Visites et reportages photos/vidéos sur demande'
      },
      process: {
        title: 'Un processus simple en 4 étapes',
        steps: [
          { title: '1. Expression de besoin', desc: 'Contact via formulaire ou WhatsApp' },
          { title: '2. Sélection du terrain', desc: 'Propositions ciblées selon usage et budget' },
          { title: '3. Vérifications & dossiers juridiques', desc: 'Notaire, cadastre, titres' },
          { title: '4. Signature & accompagnement', desc: 'Contrats, paiement, suivi post-achat' }
        ]
      },
      propose: {
        title: 'Vous souhaitez vendre un terrain à SNDP ?',
        subtitle: 'SNDP étudie l’acquisition de terrains et domaines partout au Cameroun.',
        name: 'Nom & prénom',
        phone: 'Téléphone / WhatsApp',
        region: 'Région / localité',
        area: 'Superficie approximative',
        type: 'Type de terrain',
        info: 'Informations complémentaires',
        files: 'Fichiers (photos, plans)',
        types: { field: 'Champ', estate: 'Domaine', bare: 'Terrain nu', lot: 'Lot urbain', other: 'Autre' },
        submitted: "Merci, votre terrain a été soumis à l'étude. Un conseiller vous recontactera."
      },
      contact: {
        title: 'Contact SNDP',
        whatsapp: 'WhatsApp',
        phone: 'Téléphone',
        email: 'Email',
        location: 'Localisation',
        name: 'Nom',
        message: 'Message',
        thanks: 'Merci pour votre message. Nous vous recontacterons très vite.'
      },
      footer: {
        legal: 'Mentions légales',
        privacy: 'Politique de confidentialité',
        email: 'Email de contact',
        rights: '© SNDP – Tous droits réservés.'
      }
    }
  },
  en: {
    translation: {
      image: { placeholder: 'Image placeholder (to add later)' },
      brand: { name: 'SNDP – National Private Domains Company' },
      nav: { terrains: 'Lands', why: 'Why SNDP?', diaspora: 'Diaspora', contact: 'Contact', home: 'Go to home', openMenu: 'Open menu' },
      cta: {
        whatsapp: 'Chat on WhatsApp',
        viewTerrains: 'View available lands',
        propose: 'Propose land to SNDP',
        viewAllTerrains: 'View all lands',
        talkDiaspora: 'Talk to a diaspora advisor',
        send: 'Send',
        sendTerrain: 'Submit my land for review'
      },
      search: {
        title: 'Search land',
        location: 'Location',
        type: 'Type',
        minPrice: 'Min price',
        maxPrice: 'Max price',
        any: 'Any',
        types: { any: 'Any', residential: 'Residential', agro: 'Agro', industrial: 'Industrial', tourism: 'Tourism' },
        button: 'Search'
      },
      hero: {
        title: 'SNDP – National Private Domains Company',
        subtitle: 'Acquisition, securing and development of land in Cameroon, for residents and the diaspora.',
        foot: 'Secured titles – Notarial support – Transparent process'
      },
      terrains: {
        title: 'Some currently available domains',
        subtitle: 'Overview of our offers. Contact us for a detailed selection according to your use and budget.',
        location: 'Location',
        area: 'Area',
        usage: 'Recommended use',
        viewSheet: 'View details'
      },
      status: { available: 'Available', reserved: 'Reserved', underReview: 'Under review' },
      ui: {
        addFavorite: 'Add to favorites'
      },
      why: {
        title: 'Why entrust your land projects to SNDP?',
        secure: { title: 'Legal security', desc: 'Land titles, notarial support, background checks.' },
        longterm: { title: 'Long-term approach', desc: 'We develop domains designed for 20, 50, 100 years.' },
        local: { title: 'Local network', desc: 'Traditional rulers, municipalities, cadastre, administrations: strong local anchoring.' },
        transparency: { title: 'Transparency & traceability', desc: 'Complete files, clear documents, tracking of every step.' }
      },
      diaspora: {
        title: 'Do you live in Canada, Europe or the United States?',
        subtitle: 'Remote land purchases, complete files for banks and support at every stage.',
        bank: 'Complete files for banks',
        communications: 'WhatsApp, email, video calls',
        visits: 'Visits and photo/video reports on request'
      },
      process: {
        title: 'A simple 4-step process',
        steps: [
          { title: '1. Needs assessment', desc: 'Contact via form or WhatsApp' },
          { title: '2. Land selection', desc: 'Proposals targeted to use and budget' },
          { title: '3. Checks & legal files', desc: 'Notary, cadastre, titles' },
          { title: '4. Signing & support', desc: 'Contracts, payment, post-purchase follow-up' }
        ]
      },
      propose: {
        title: 'Do you want to sell land to SNDP?',
        subtitle: 'SNDP studies the acquisition of land and domains throughout Cameroon.',
        name: 'Full name',
        phone: 'Phone / WhatsApp',
        region: 'Region / locality',
        area: 'Approximate area',
        type: 'Type of land',
        info: 'Additional information',
        files: 'Files (photos, plans)',
        types: { field: 'Field', estate: 'Estate', bare: 'Bare land', lot: 'Urban lot', other: 'Other' },
        submitted: 'Thank you, your land has been submitted for review. An advisor will contact you.'
      },
      contact: {
        title: 'Contact SNDP',
        whatsapp: 'WhatsApp',
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        name: 'Name',
        message: 'Message',
        thanks: 'Thank you for your message. We will contact you shortly.'
      },
      footer: {
        legal: 'Legal notice',
        privacy: 'Privacy policy',
        email: 'Contact email',
        rights: '© SNDP – All rights reserved.'
      }
    }
  }
}

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  })

export default i18next
