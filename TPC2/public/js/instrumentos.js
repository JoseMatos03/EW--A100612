document.addEventListener("DOMContentLoaded", function () {
    const instrumentosData = document.getElementById("instrumentos-data").textContent;
    const instrumentos = JSON.parse(instrumentosData);

    const tableBody = document.getElementById("table-body");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(instrumentos.length / itemsPerPage);

    function renderTable() {
        // Limpa a tabela antes de renderizar
        tableBody.innerHTML = "";

        // Obtém os dados da página atual
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = instrumentos.slice(start, end);

        // Popula a tabela
        paginatedData.forEach(instrumento => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${instrumento.id}</td>
                <td>${instrumento["#text"]}</td>
            `;

            row.style.cursor = "pointer";

            row.addEventListener("click", () => {
                window.location.href = `/instrumentos/${instrumento.id}`;
            });

            tableBody.appendChild(row);
        });

        // Atualiza informações de paginação
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

        // Desativa/ativa os botões
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Listeners para os botões de paginação
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

    // Renderiza a tabela inicialmente
    renderTable();
});
