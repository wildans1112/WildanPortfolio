const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 
            'Juni', 'Juli', 'Agustus', 'September', 
            'Oktober', 'November', 'Desember'
        ],
        datasets: [
            {
                label: '2022',
                data: [4017, 4136, 5841, 7091, 5467, 3178, 6367, 6313, 3395, 8297, 7829, 5945],
                backgroundColor: 'rgb(245, 57, 173)',
            },
            {
                label: '2023',
                data: [6135, 7955, 5841, 6547, 3367, 7613, 6139, 9404, 2871, 8039, 8809, 8639],
                backgroundColor: 'rgba(0, 85, 255, 0.6)',
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Diagram Penjualan Bulanan'
            }
        }
    }
});