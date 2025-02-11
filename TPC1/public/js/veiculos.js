document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 10;
    let currentPage = 1;
    let veiculos = [];

    const tableBody = document.querySelector("#veiculos-table tbody");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    // Fetch data from json-server
    axios.get("http://localhost:5000/viaturas")
        .then(response => {
            veiculos = response.data;
            updateTable();
        })
        .catch(error => console.error("Error fetching veiculos:", error));

    function updateTable() {
        tableBody.innerHTML = "";

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = veiculos.slice(startIndex, startIndex + itemsPerPage);

        paginatedData.forEach(veiculo => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.marca}</td>
                <td>${veiculo.modelo}</td>
                <td>${veiculo.matricula}</td>
            `;

            tableBody.appendChild(row);
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        pageInfo.textContent = `Página ${currentPage} de ${Math.ceil(veiculos.length / itemsPerPage)}`;

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage >= Math.ceil(veiculos.length / itemsPerPage);
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < Math.ceil(veiculos.length / itemsPerPage)) {
            currentPage++;
            updateTable();
        }
    });
});
