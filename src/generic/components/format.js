export function formatDate(date) {
    const dateF = new Date(date);
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    let dd = dateF.getDate();
    let mm = dateF.getMonth()+1;
    let yyyy = dateF.getFullYear();

    if(dd<10) dd='0'+dd;
    /*if(mm<10)  mm='0'+mm;*/

    return dd+' '+monthNames[mm]+' '+yyyy;
}