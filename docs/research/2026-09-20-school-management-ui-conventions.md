# Conventions UI des écrans de gestion scolaire — repères pour `templates/gestion-ecole/`

Recherche rapide (pas un rapport exhaustif) menée sur la doc officielle de PowerSchool SIS et Gradelink, ainsi que sur des produits de gestion scolaire ciblant l'Afrique francophone (KiboERP, SmartSchool), et sur des sources locales congolaises (établissements de Brazzaville, calendrier scolaire, presse). Sert de base pour le design des 3 écrans du prototype démo `templates/gestion-ecole/` (école primaire privée fictive, Congo-Brazzaville, données 100% factices).

## 1. Écran dashboard / vue d'ensemble

KPIs/tuiles standards observés :

- **Effectif d'élèves actifs** (par école, avec tendance) — le dashboard "School" de PowerSchool SIS affiche un widget "School Enrollment Trend" (effectif actif mensuel) et un "School Membership Trend" (effectif basé sur la présence quotidienne) ; le dashboard "District" affiche "Active Students Per School". ([PowerSchool SIS — Dashboard](https://ps.powerschool-docs.com/pssis-admin/latest/dashboard))
- **Nombre de jours de classe dans le mois / calendrier en cours** — widget "In Session Days" du dashboard école PowerSchool. ([PowerSchool SIS — Dashboard](https://ps.powerschool-docs.com/pssis-admin/latest/dashboard))
- **Effectifs de programmes spécifiques** (ex. cantine, transport, activités) — widget "Programs Active Enrollments". ([PowerSchool SIS — Dashboard](https://ps.powerschool-docs.com/pssis-admin/latest/dashboard))
- **Paiements du jour et impayés en temps réel** — SmartSchool met en avant, comme argument produit central pour les écoles privées africaines, des "chiffres de l'école en temps réel : paiements du jour, impayés, absences, effectifs, depuis un téléphone". ([SmartSchool — Logiciel de gestion d'école](https://www.smartschool.sn/logiciel-gestion-ecole))
- **Taux de recouvrement des frais de scolarité** — KiboERP fournit un tableau de bord mensuel avec "taux de recouvrement des scolarités, charges par poste, résultat prévisionnel", destiné aux directeurs d'écoles privées ouest-africaines. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))
- **Absences du jour** — cité par SmartSchool comme chiffre clé du tableau de bord temps réel, aux côtés des paiements. ([SmartSchool — Logiciel de gestion d'école](https://www.smartschool.sn/logiciel-gestion-ecole))

Tuiles recommandées pour le prototype (les plus parlantes pour une démo commerciale) : nombre total d'élèves inscrits, nombre de classes, frais collectés vs. impayés (montant + %), taux de recouvrement, absences du jour. Combiner l'angle "effectifs/pédagogie" (PowerSchool) et l'angle "recouvrement financier" (KiboERP/SmartSchool), ce dernier étant le signal le plus fort et le plus vendeur pour un directeur d'école privée congolaise qui vit des frais de scolarité.

## 2. Écran liste des élèves

Colonnes standards d'une table d'élèves :

- **Nom de l'élève** — colonne de base de tous les rosters, avec recherche dédiée (Gradelink : barre de recherche sur la colonne "Student name"). ([Gradelink — Student Roster Report](https://community.gradelink.com/en/support/solutions/articles/6000187525-student-roster-report))
- **Classe / niveau** — chaque profil élève chez KiboERP inclut "grade level, class assignment" comme information structurante du dossier. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))
- **Coordonnées des parents/tuteurs** — "parental contacts" fait partie du profil digital complet décrit par KiboERP ; support multi-tuteurs par élève également mentionné pour les logiciels africains en général. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))
- **Photo de l'élève** — SmartSchool met en avant des "dossiers complets avec photo" comme standard attendu par les écoles africaines. ([SmartSchool — Logiciel de gestion d'école](https://www.smartschool.sn/logiciel-gestion-ecole))
- **Statut de paiement des frais / impayés** — SmartSchool maintient une "liste des impayés toujours à jour" comme fonctionnalité clé, ce qui implique une colonne de statut de paiement visible au niveau de la liste (pas seulement du profil détaillé). ([SmartSchool — Logiciel de gestion d'école](https://www.smartschool.sn/logiciel-gestion-ecole))
- **Historique de paiement résumé** — le profil élève KiboERP inclut "payment history" comme un des champs du dossier digital, au même niveau que les infos académiques. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))
- **Filtre/recherche par valeur de colonne** — le roster Gradelink permet de cliquer sur chaque en-tête de colonne et sélectionner une valeur dans une liste pour filtrer (ex. filtrer par classe). ([Gradelink — Student Roster Report](https://community.gradelink.com/en/support/solutions/articles/6000187525-student-roster-report))

Table recommandée pour le prototype : Photo | Nom | Classe | Contact parent | Statut frais (à jour / en retard / partiel) | (clic → profil détail).

## 3. Écran profil élève / détail — section frais de scolarité

Sections standards, avec un focus spécifique sur le suivi des paiements :

- **Plan de paiement / échéancier configurable** — Gradelink permet de définir plusieurs "pay plans" par élève (ex. "10-Month Pay Plan" ou "Quarterly Pay Plan"), avec calcul automatique du montant de chaque échéance selon le plan choisi. ([Gradelink — Pay Plans and Installment Charges](https://help.gradelink.com/pay-plans-and-installment-charges))
- **Type de frais / transaction** — chaque échéance est rattachée à un "Transaction Type" (ex. "Tuition", "After Care") ; PowerSchool utilise de même un champ "Fee type" avec description associée pour catégoriser chaque frais facturé à un élève. ([Gradelink — Pay Plans and Installment Charges](https://help.gradelink.com/pay-plans-and-installment-charges) ; [PowerSchool SIS — Fee Management](https://ps.powerschool-docs.com/pssis-admin/latest/fee-management))
- **Date d'échéance et statut de paiement par ligne** — le tableau de frais PowerSchool affiche pour chaque enregistrement : type de frais, description, date d'ajout, nom de l'élève, cours associé, date d'échéance ("due date"), statut de paiement ("payment status") et montant. ([PowerSchool SIS — Fee Management](https://ps.powerschool-docs.com/pssis-admin/latest/fee-management))
- **Référence de transaction / numéro de reçu** — PowerSchool associe un "payment reference number" à chaque paiement enregistré, utile pour la traçabilité. ([PowerSchool SIS — Fee Management](https://ps.powerschool-docs.com/pssis-admin/latest/fee-management))
- **Cycle de facturation (mensuel/trimestriel) avec clôture périodique** — la section financière de Gradelink est organisée en "billing cycles" que l'établissement doit ouvrir et clôturer chaque mois pour garder les comptes à jour, ce qui structure naturellement un historique de paiement chronologique par période. ([Gradelink — Tuition Billing Overview](https://help.gradelink.com/tuition-billing-overview))
- **Solde restant dû / relances automatiques** — KiboERP déclenche automatiquement des "relances pour impayés" selon un calendrier personnalisable et envoie les échéanciers de paiement par SMS/WhatsApp aux familles, ce qui suppose un indicateur de solde/retard visible sur le profil. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))
- **Réconciliation mobile money automatique** — les paiements par Wave, Orange Money ou MTN MoMo sont rapprochés automatiquement dans le dossier de paiement de l'élève chez KiboERP. ([KiboERP — Gestion école](https://kiboerp.com/erp/ecole))

Sections recommandées pour l'écran détail du prototype : en-tête (photo, nom, classe, contact parent) → bloc résumé frais (montant total dû sur l'année, montant payé, solde restant, statut) → tableau historique des paiements par trimestre (échéance | montant | statut | mode de paiement | date de paiement).

## 4. Contexte Congo-Brazzaville / Afrique francophone — structuration de l'année scolaire et des frais

- **Année scolaire en 3 trimestres, d'octobre à juillet** — pour 2025-2026 : 1er trimestre début octobre à mi-décembre (congé de Noël du 20 déc. au 5 janv.), 2e trimestre janvier à mi-mars (congé de février du 14 au 28 févr.), 3e trimestre mi-mars à mi-juillet (congé de Pâques du 3 au 18 avril). La facturation de la scolarité est donc naturellement rythmée par ces 3 trimestres plutôt que par des semestres. ([iambeezy — Calendrier scolaire Congo 2025-2026](https://blog.iambeezy.app/fr/calendrier-scolaire-congo-brazzaville-2025-2026-dates-vacances-examens/))
- **Frais de scolarité facturés par trimestre** — dans les écoles privées congolaises, les frais de scolarité représentent généralement 50 000 à 300 000 FCFA par trimestre selon l'établissement et le niveau. ([iambeezy — Calendrier scolaire Congo 2025-2026](https://blog.iambeezy.app/fr/calendrier-scolaire-congo-brazzaville-2025-2026-dates-vacances-examens/))
- **Frais de fournitures distincts des frais de scolarité** — comptez en plus 30 000 à 60 000 FCFA pour les fournitures scolaires (cahiers, stylos, sac) au primaire, facturés séparément (souvent à l'inscription). ([iambeezy — Calendrier scolaire Congo 2025-2026](https://blog.iambeezy.app/fr/calendrier-scolaire-congo-brazzaville-2025-2026-dates-vacances-examens/))
- **Montée en puissance du mobile money pour les frais scolaires** — de nombreux établissements à Brazzaville et Pointe-Noire acceptent désormais le mobile money (MTN Mobile Money, Airtel Money) pour les frais d'inscription et les frais mensuels/trimestriels, les écoles privées étant les plus avancées sur ce point. ([iambeezy — Payer les frais scolaires par MTN MoMo Congo](https://blog.iambeezy.app/fr/payer-frais-scolarite-mtn-momo-cg-2026/))
- **Frais d'inscription/adhésion distincts de la scolarité, avec structure multi-composants** — l'exemple d'un établissement privé à Brazzaville (LIFSE, cas haut de gamme/international) montre une structure de frais à plusieurs lignes bien distinctes : frais d'inscription annuelle (ex. 110 000 FCFA/enfant), assurance individuelle (ex. 2 600 FCFA/enfant), scolarité par niveau (grille séparée), et forfaits de fournitures scolaires par cycle (maternelle vs primaire). Ce n'est pas un ordre de grandeur pour une école de quartier modeste, mais la structure en lignes de frais distinctes (inscription / scolarité / fournitures / assurance) reste représentative du secteur privé congolais. ([LIFSE Brazzaville — Frais de scolarité](https://www.lifse.org/frais-de-scolarite))

Structure de frais recommandée pour le prototype (crédible pour une école primaire privée de quartier, pas un établissement international haut de gamme) :
- **Frais d'inscription** (une fois, en début d'année, ~20 000–50 000 FCFA)
- **Frais de scolarité par trimestre** (~50 000–150 000 FCFA/trimestre, x3 trimestres sur l'année)
- Modes de paiement affichés : espèces, Mobile Money (MTN Mobile Money / Airtel Money), avec statut par trimestre (payé / partiel / en retard).
