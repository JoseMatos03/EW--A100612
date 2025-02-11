document.addEventListener("DOMContentLoaded", function () {
    const veiculosData = document.getElementById("veiculos-data").textContent;
    const veiculos = JSON.parse(veiculosData);

    const tableBody = document.getElementById("table-body");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(veiculos.length / itemsPerPage);

    function renderTable() {
        // Clear the table first
        tableBody.innerHTML = "";

        // Get data slice for current page
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = veiculos.slice(start, end);

        // Populate the table
        paginatedData.forEach(veiculo => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${veiculo.marca}</td>
                <td>${veiculo.modelo}</td>
                <td>${veiculo.matricula}</td>
            `;

            tableBody.appendChild(row);
        });

        // Update pagination info
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

        // Disable/enable buttons
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Event listeners for pagination buttons
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    });

    nextPageBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    });

    // Initial table render
    renderTable();
});
