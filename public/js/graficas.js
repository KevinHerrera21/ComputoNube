// grafica 1
var x1 = ["Si","No"];
var y1 = [5,0];
var layout1 = {
    title:"¿Sabes o has escuchado del término Cloud Computing (Cómputo en la nube)?", 
    paper_bgcolor:"#212529",
    annotations: [{
        x: 0,
        y: 1,
        ax: 20,
        ay: -10,
        text: "5 respuestas",
    }],
    font: {
        color: "#fff"
    }
};
var data1 = [{
    labels:x1, 
    values:y1, 
    type:"pie",
    marker: {
        colors: [
            "#0d6efd",
            "#dc3545"
        ],
    }
}];

var config = {responsive: true}

//grafica 2
var x2 = ["Si","No"];
var y2 = [4,1];
var layout2 = {
    title:"¿Conoce cuáles son los servicios que se ofrecen en Cloud Computing?", 
    paper_bgcolor:"#212529",
    annotations: [{
        x: 0,
        y: 1,
        ax: 20,
        ay: -10,
        text: "5 respuestas",
    }],
    font: {
        color: "#fff"
    }
};
var data2 = [{
    labels:x2, 
    values:y2, 
    type:"pie",
    marker: {
        colors: [
            "#0d6efd",
            "#dc3545"
        ],
        line: {
            color:"#fff",
            width: "2"
        }
    }
}];

//grafica 3
var x3 = ["Si","No"];
var y3 = [5,0];
var layout3 = {
    title:"¿Ha utilizado algún servicio en la nube?", 
    paper_bgcolor:"#212529",
    annotations: [{
        x: 0,
        y: 1,
        ax: 20,
        ay: -10,
        text: "5 respuestas",
    }],
    font: {
        color: "#fff"
    }
};
var data3 = [{
    labels:x3, 
    values:y3, 
    type:"pie",
    marker: {
        colors: [
            "#0d6efd",
            "#dc3545"
        ]
    }
}];

//grafica 4
var x4 = ["Si","No"];
var y4 = [1,4];
var layout4 = {
    title:"¿Cree usted que el cómputo en la nube es una tecnología sin futuro?", 
    paper_bgcolor:"#212529",
    annotations: [{
        x: 0,
        y: 1,
        ax: 20,
        ay: -10,
        text: "5 respuestas",
    }],
    font: {
        color: "#fff"
    }
};
var data4 = [{
    labels:x4, 
    values:y4, 
    type:"pie",
    marker: {
        colors: [
            "#0d6efd",
            "#dc3545"
        ],
        line: {
            color:"#fff",
            width: "2"
        }
    }
}];

//grafica 5
var x5 = ["Si","No"];
var y5 = [5,0];
var layout5 = {
    title:"¿Cree usted que es importante que la FIME enseñe sobre Cloud Computing?", 
    paper_bgcolor:"#212529",
    annotations: [{
        x: 0,
        y: 1,
        ax: 20,
        ay: -10,
        text: "5 respuestas",
    }],
    font: {
        color: "#fff"
    }
};
var data5 = [{
    labels:x5, 
    values:y5, 
    type:"pie",
    marker: {
        colors: [
            "#0d6efd",
            "#dc3545"
        ]
    }
}];

//grafica 6
var x6 = ["COMPARTIR INFORMACION Y OTROS MAS","Classroom", "Google Cloud", "PaaS"];
var y6 = [1,1,1,2];
var layout6 = {
    title:"¿Cuál de los servicios de Cloud Computing que usted conoce, cree que se podrían ofrecer o aplicar en FIME?", 
    paper_bgcolor:"#212529",
    annotations: [{
        xref: 'paper',
        yref: 'paper',
        x: 0.05,
        xanchor: 'right',
        y: 1.05,
        yanchor: 'bottom',
        text: '5 respuestas',
        showarrow: false
    }],
    margin: {
        pad: "5"
    },
    yaxis: {
        gridcolor: "#000",
        dividerwidth: "5"
    },
    font: {
        color: "#fff"
    }
};
var data6 = [{
    x:x6, 
    y:y6, 
    type:"bar",
    marker: {
        color: "#0d6efd",
        line: {
            color:"#000",
            width: "1"
        }
    }
}];

// Mostrar graficas
Plotly.newPlot("grafica1",data1,layout1,config)
Plotly.newPlot("grafica2",data2,layout2,config)
Plotly.newPlot("grafica3",data3,layout3,config)
Plotly.newPlot("grafica4",data4,layout4,config)
Plotly.newPlot("grafica5",data5,layout5,config)
Plotly.newPlot("grafica6",data6,layout6,config)