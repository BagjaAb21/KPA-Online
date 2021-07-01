let labels1 = ['Khuddam', 'LI','Athfal','Nashirat','Anshar','Abna','Banat','Simpatisan'];

let data1 = [325,488,1664,1803,10,92,71,39];
let colors1 = ['#49A9EA', '#36CAAB','rgb(158, 151, 151)','rgb(56, 52, 52)','#7beec7','rgb(255, 174, 0)','#437423','rgb(255, 0, 0)']

let myChart = document.getElementById("myChart").getContext('2d');

let chart = new Chart(myChart, {
    type: 'pie',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]
    },
    Option: {
        title: {
            text: "Data Peserta KPA 2021",
            display : true
        }
    }
})