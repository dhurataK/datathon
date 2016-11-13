/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/2004/Numri_i_pergjithshem_i_te_punesuarve_ne_shendetsi_2004.csv", {
		download: true,
		complete: function(results) {
			// console.log(results.data);
			createGraph(results.data);
		}
	});
}

function createGraph(data) {
	var komunat = [];
	var gjithsej = [];
	var mjek = [];
	var stomatolog = [];
	var farmacist = [];
	var teknik_medicinal = [];
	var bashkePunetorMedicinal = [];
	var punetor_jomedicinal = [];

	for (var i = 0; i < data.length-1; i++) {
			komunat.push(data[i][0]);
			gjithsej.push(data[i][1]);
			mjek.push(data[i][2]);
			stomatolog.push(data[i][3]);
			farmacist.push(data[i][4]);
			teknik_medicinal.push(data[i][5]);
			bashkePunetorMedicinal.push(data[i][6]);
			punetor_jomedicinal.push(data[i][7]);
	}
	//
	  console.log(komunat);
		console.log(gjithsej);
		console.log(mjek);
		console.log(stomatolog);
		console.log(farmacist);
		console.log(teknik_medicinal);
		console.log(bashkePunetorMedicinal);
		console.log(punetor_jomedicinal);
	//
	var chart = c3.generate({
    data: {
        columns: [
            mjek,
						stomatolog,
						farmacist,
						teknik_medicinal,
						bashkePunetorMedicinal,
						punetor_jomedicinal
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
}

parseData(createGraph);
