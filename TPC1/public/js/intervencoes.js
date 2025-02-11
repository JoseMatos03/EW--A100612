document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 10;
    let currentPage = 1;
    let intervencoes = [];

    const tableBody = document.querySelector("#intervencoes-table tbody");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    // Fetch data from json-server
    axios.get("http://localhost:5000/intervencoes")
        .then(response => {
            intervencoes = response.data;
            updateTable();
        })
        .catch(error => console.error("Error fetching intervencoes:", error));

    function updateTable() {
        tableBody.innerHTML = "";

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = intervencoes.slice(startIndex, startIndex + itemsPerPage);

        paginatedData.forEach(intervencao => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${intervencao.codigo}</td>
                <td>${intervencao.nome}</td>
                <td>${intervencao.descricao}</td>
            `;

            tableBody.appendChild(row);
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        pageInfo.textContent = `Página ${currentPage} de ${Math.ceil(intervencoes.length / itemsPerPage)}`;

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage >= Math.ceil(intervencoes.length / itemsPerPage);
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < Math.ceil(intervencoes.length / itemsPerPage)) {
            currentPage++;
            updateTable();
        }
    });
});
