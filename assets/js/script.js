let labels1 = ['Khudam', 'LI','Athfal','Nashirat'];

let data1 = [100,100,100,100];
let colors1 = ['#49A9EA', '#36CAAB','rgb(158, 151, 151)','rgb(56, 52, 52)']

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
            text: "Do you like Doughnouts?",
            display : true
        }
    }
})