import React from 'react'
import { Line, Doughnut } from '@reactchartjs/react-chart.js'

const data = {
    labels: ['Baishak', 'Jestha', 'Ashar', 'Srawan', 'Bhadra', 'Ashoj', 'Kartik', 'Mansir', 'Push', 'Magh', 'Falgun', 'chaitra'],
    datasets: [
        {
            label: 'Statistics Reports',
            data: [0],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
        },
    ],
}

const members = {
    labels: ['Bikash Adhikari', 'Uday Adhikari', 'Binay Adhikari', 'Bijay Adhikari', 'Sanjan Gurung', 'Bijaya Adhikari', 'Bishal Adhikari', 'Sunil Adhikari', 'Bibek Adhikari'],
    datasets: [
        {
            label: 'Statistics Reports',
            data: [5000, 2000, 3000, 2000, 2000, 2000, 1000, 2000, 3000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(3, 1, 200, 0.7)',
                'rgba(4, 255, 166, 0.7)',
                'rgba(10, 180, 180, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(3, 1, 200, 1)',
                'rgba(4, 255, 166, 1)',
                'rgba(10, 180, 180, 1)',

            ],
            borderWidth: 2,
        },
    ],
}

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
}

const Graphs = () => (
    <>
        <div className='header'>
            <h1 className='text-xl font-bold px-4 py-6 text-center text-red-400 font-serif'>Annual Reports: 2076 - 2077</h1>
        </div>
        <div className="grid grid-cols-12 mx-4">
            <div className="col-span-6 w-full h-full">
                <Line data={data} options={options} />
            </div>
            <div className="col-span-6 w-full h-full">
                <Doughnut data={members} />
            </div>

        </div>

    </>
)

export default Graphs