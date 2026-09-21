const T={en:{
how:'How it works',cities:'Cities',pricing:'Pricing',start:'Start your search',eyebrow:'U.S. RELOCATION • PROPERTY RESEARCH',title:'Your next U.S. home, <em>without</em> the endless search.',intro:'Tell us your budget, destination and requirements. We research available homes and apartments and turn the search into a clear, personalized shortlist.',start2:'Start my search →',learn:'See how it works',t1:'✓ Personalized search',t2:'✓ Clear comparisons',t3:'✓ Built for international movers',match:'MATCH FOUND',props:'properties',match2:'matching your criteria',s1:'Tell us what you need',s2:'We research & filter',s3:'You receive your shortlist',process:'THE PROCESS',processTitle:'From “I need a place” to a shortlist worth opening.',step1:'Tell us your criteria',step1p:'Budget, city, move-in date, bedrooms, furnishing preferences and anything else that matters to you.',step2:'We do the research',step2p:"We search relevant public listings and filter out options that don't fit your criteria.",step3:'Review your shortlist',step3p:'You get a structured selection with key details so you can compare options quickly.',cityTitle:"Choose where you're headed.",priceEyebrow:'SIMPLE PRICING',priceTitle:'Start small. Upgrade when you need more.',p1:'A focused first shortlist.',p11:'5–10 matching properties',p12:'Basic comparison',p13:'One destination',choose:'Choose Starter',popular:'MOST REQUESTED',p2:'A deeper search for serious movers.',p21:'15–20 matching properties',p22:'Detailed comparison',p23:'Neighborhood research',p24:'Application checklist',choose2:'Choose Standard',p3:'For more complex relocations.',p31:'Extended property research',p32:'Multiple search rounds',p33:'Priority communication',choose3:'Choose Premium',formEyebrow:'START YOUR SEARCH',formTitle:"Tell us what you're looking for.",formIntro:"Submit your requirements and we'll prepare a personalized property research brief.",name:'Full name',email:'Email',dest:'Destination city',selectCity:'Select a city',budget:'Monthly budget (USD)',date:'Move-in date',type:'Property type',apt:'Apartment',house:'House',either:'Either',beds:'Bedrooms',furnished:'Furnished?',yes:'Furnished',no:'Unfurnished',notes:'Anything else we should know?',send:'Send my requirements →',note:'Your request will be securely sent to US Home Finder.',faqTitle:'Questions before you start.',q1:'Do I need to already be in the U.S.?',a1:'No. The service is designed to help people research housing before they arrive.',q2:'Do you guarantee that a property will still be available?',a2:'No. Rental listings can change quickly. Shortlists reflect information available at the time of the search.',q3:'Do you act as my real-estate agent?',a3:'This service is positioned as property research and relocation assistance. Regulated brokerage, leasing, negotiation and referral activities may require state-specific compliance.',final:'Less scrolling. More relevant options.',finalBtn:'Start your property search →',foot:'Property research & relocation assistance.',ok:'Request captured. Connect this form to your business inbox or CRM before launch.'
},fr:{
how:'Comment ça marche',cities:'Villes',pricing:'Tarifs',start:'Commencer ma recherche',eyebrow:'RELOCATION AUX ÉTATS-UNIS • RECHERCHE IMMOBILIÈRE',title:'Votre prochain logement aux États-Unis, <em>sans</em> des heures de recherche.',intro:'Indiquez-nous votre budget, votre destination et vos critères. Nous recherchons des logements disponibles et vous présentons une sélection claire et personnalisée.',start2:'Commencer ma recherche →',learn:'Voir comment ça marche',t1:'✓ Recherche personnalisée',t2:'✓ Comparaison claire',t3:'✓ Pensé pour les expatriés',match:'CORRESPONDANCE TROUVÉE',props:'logements',match2:'correspondant à vos critères',s1:'Indiquez vos besoins',s2:'Nous recherchons & filtrons',s3:'Recevez votre sélection',process:'LE PROCESSUS',processTitle:'De « je cherche un logement » à une sélection qui vaut le détour.',step1:'Indiquez vos critères',step1p:"Budget, ville, date d'emménagement, nombre de chambres, meublé ou non, et tout autre élément important pour vous.",step2:'Nous faisons la recherche',step2p:'Nous recherchons les annonces publiques pertinentes et écartons celles qui ne correspondent pas à vos critères.',step3:'Examinez votre sélection',step3p:'Vous recevez une sélection structurée avec les informations essentielles pour comparer les logements rapidement.',cityTitle:'Choisissez votre destination.',priceEyebrow:'TARIFS SIMPLES',priceTitle:'Commencez simplement. Passez à une formule supérieure si nécessaire.',p1:'Une première sélection ciblée.',p11:'5 à 10 logements correspondants',p12:'Comparaison de base',p13:'Une destination',choose:'Choisir Starter',popular:'LE PLUS DEMANDÉ',p2:'Une recherche approfondie pour un projet concret.',p21:'15 à 20 logements correspondants',p22:'Comparaison détaillée',p23:'Recherche sur les quartiers',p24:'Liste des documents à prévoir',choose2:'Choisir Standard',p3:'Pour les projets de relocation plus complexes.',p31:'Recherche immobilière étendue',p32:'Plusieurs recherches',p33:'Communication prioritaire',choose3:'Choisir Premium',formEyebrow:'COMMENCER LA RECHERCHE',formTitle:'Dites-nous ce que vous recherchez.',formIntro:'Envoyez-nous vos critères afin que nous puissions préparer votre brief de recherche personnalisé.',name:'Nom complet',email:'E-mail',dest:'Ville de destination',selectCity:'Sélectionnez une ville',budget:'Budget mensuel (USD)',date:"Date d'emménagement",type:'Type de logement',apt:'Appartement',house:'Maison',either:'Les deux',beds:'Chambres',furnished:'Meublé ?',yes:'Meublé',no:'Non meublé',notes:'Autre chose à préciser ?',send:'Envoyer mes critères →',note:'Votre demande sera envoyée de manière sécurisée à US Home Finder.',faqTitle:'Questions avant de commencer.',q1:'Dois-je déjà être aux États-Unis ?',a1:'Non. Le service est conçu pour aider à rechercher un logement avant votre arrivée.',q2:"Garantissez-vous qu'un logement sera toujours disponible ?",a2:"Non. Les annonces locatives peuvent évoluer rapidement. Les sélections reflètent les informations disponibles au moment de la recherche.",q3:'Agissez-vous comme mon agent immobilier ?',a3:'Ce service est présenté comme de la recherche immobilière et de l’aide à la relocation. Les activités réglementées de courtage, location, négociation ou mise en relation rémunérée peuvent nécessiter des démarches selon l’État.',final:'Moins de défilement. Plus de logements pertinents.',finalBtn:'Commencer ma recherche →',foot:'Recherche immobilière & aide à la relocation.',ok:'Demande enregistrée. Connectez ce formulaire à votre boîte e-mail ou CRM avant le lancement.'
}};
let lang=localStorage.getItem('uhf-lang')||'en';
function setLang(l){lang=l;localStorage.setItem('uhf-lang',l);document.documentElement.lang=l;document.querySelectorAll('[data-i18n]').forEach(e=>{let k=e.dataset.i18n;if(T[l][k]!==undefined)e.innerHTML=T[l][k]});document.querySelectorAll('.lang').forEach(b=>b.classList.toggle('active',b.dataset.lang===l))}
document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));

// Formspree submission: use the official HTTP endpoint directly so the form
// works on GitHub Pages without depending on a third-party JS wrapper.
const form = document.getElementById('form');
const successBox = document.getElementById('form-success');
const errorBox = document.getElementById('form-error');

function clearFormMessages() {
  successBox.hidden = true;
  errorBox.hidden = true;
  successBox.textContent = '';
  errorBox.textContent = '';
  document.querySelectorAll('.field-error').forEach(el => el.textContent = '');
  document.querySelectorAll('[data-fs-field]').forEach(el => el.removeAttribute('aria-invalid'));
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearFormMessages();

  const submitButton = form.querySelector('[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = lang === 'fr' ? 'Envoi…' : 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (data.errors?.length) {
        data.errors.forEach(err => {
          const field = err.field ? document.querySelector(`[data-fs-error="${CSS.escape(err.field)}"]`) : null;
          if (field) field.textContent = err.message || '';
        });
        showError(lang === 'fr'
          ? 'Vérifiez les champs indiqués puis réessayez.'
          : 'Please check the highlighted fields and try again.');
      } else {
        showError(lang === 'fr'
          ? 'Impossible d’envoyer la demande pour le moment. Réessayez dans quelques instants.'
          : 'Your request could not be sent right now. Please try again in a moment.');
      }
      return;
    }

    successBox.textContent = T[lang].ok;
    successBox.hidden = false;
    form.reset();
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (error) {
    showError(lang === 'fr'
      ? 'Erreur de connexion. Vérifiez votre connexion internet et réessayez.'
      : 'Connection error. Check your internet connection and try again.');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalText;
  }
});

setLang(lang);
