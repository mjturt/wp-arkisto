/**
 * Javascripit fronttiin
 **/

/* Pöytäkirjojen sorttausta varten */

jQuery(function ($)  {
    $('#pk-taulukko').DataTable({
        "pageLength": 25,
        "language": {
            "sProcessing":    "Käsitellään...",
            "sLengthMenu":    "Näytä _MENU_ pöytäkirjaa",
            "sZeroRecords":   "Yhtäkään pöytäkirjaa ei löytynyt",
            "sEmptyTable":    "Ei löytynyt",
            "sInfo":          "Näytetään pöytäkirjat _START_-_END_ yhteensä _TOTAL_:stä pöytäkirjasta",
            "sInfoEmpty":     "Näytetään pöytäkirjat 0-0 yhteensä 0:sta pöytäkirjasta",
            "infoFiltered":   "(Haettu _MAX_:stä pöytäkirjasta)",
            "decimal":        ",",
            "thousands":      "",
            "sInfoPostFix":   "",
            "sSearch":        "Haku:",
            "sUrl":           "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Ladataan...",
            "oPaginate": {
                "sFirst":    "Ensimmäinen",
                "sLast":    "Viimeinen",
                "sNext":    "Seuraava",
                "sPrevious": "Edellinen"
            },
        }
    });
});