export function getInformation(path){
    const token = localStorage.getItem('token');
    return fetch(path, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(async response => {
        // Vérifier si la réponse est OK (200)
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }
        // Extraire le corps de la réponse sous forme de JSON
        const data = await response.json();
        // console.log(data);
        return data;
    })
    .catch(error => {
        // Gérer les erreurs de réseau ou de traitement des données
        console.error('Erreur lors de la récupération des données:', error);
        throw error; // Vous pouvez choisir de rejeter à nouveau l'erreur pour la gérer dans le composant parent si nécessaire
    });
}
