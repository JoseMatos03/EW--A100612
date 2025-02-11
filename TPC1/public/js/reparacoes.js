document.addEventListener("DOMContentLoaded", function () {
    const reparacoesData = document.getElementById("reparacoes-data").textContent;
    const reparacoes = JSON.parse(reparacoesData);

    const tableBody = document.getElementById("table-body");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(reparacoes.length / itemsPerPage);

    function renderTable() {
        // Clear the table first
        tableBody.innerHTML = "";

        // Get data slice for current page
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = reparacoes.slice(start, end);

        // Populate the table
        paginatedData.forEach(reparacao => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${reparacao.nome}</td>
                <td>${reparacao.nif}</td>
                <td>${reparacao.data}</td>
                <td>${reparacao.viatura.marca} ${reparacao.viatura.modelo} (${reparacao.viatura.matricula})</td>
                <td>${reparacao.nr_intervencoes}</td>
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
