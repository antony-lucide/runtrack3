window.onload = function(){
    function jourtravaille(date) {
        const joursFeries2020 = [
            new Date('2020-01-01'),
            new Date('2020-04-13'),
            new Date('2020-05-01'),
            new Date('2020-05-08'),
            new Date('2020-05-21'),
            new Date('2020-06-01'),
            new Date('2020-07-14'),
            new Date('2020-08-15'),
            new Date('2020-11-01'),
            new Date('2020-11-11'),
            new Date('2020-12-25'),
        ];

        for (let i = 0; i < joursFeries2020.length; i++) {
            if (date.toDateString() === joursFeries2020[i].toDateString()) {
                console.log(`Le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour férié.`);
                return;
            }
        }

        const jour = date.getDay();
        if (jour === 0 || jour === 6) { 
            console.log(`Non, le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un week-end.`);
            return;
        }

        console.log(`Oui, le ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} est un jour travaillé.`);
    }

    jourtravaille(new Date('2020-05-01')); 
    jourtravaille(new Date('2020-05-02')); 
    jourtravaille(new Date('2020-08-04')); 
}