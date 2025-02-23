document.addEventListener("DOMContentLoaded", function () {
    const cursosData = document.getElementById("cursos-data").textContent;
    const cursos = JSON.parse(cursosData);

    const tableBody = document.getElementById("table-body");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(cursos.length / itemsPerPage);

    function renderTable() {
        // Limpar a tabela
        tableBody.innerHTML = "";

        // Paginação
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = cursos.slice(start, end);

        // Preencher a tabela
        paginatedData.forEach(curso => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${curso.id}</td>
                <td>${curso.designacao}</td>
                <td>${curso.duracao} anos</td>
                <td>${curso.instrumento["#text"]}</td>
            `;

            row.style.cursor = "pointer";

            row.addEventListener("click", () => {
                window.location.href = `/cursos/${curso.id}`;
            });

            tableBody.appendChild(row);
        });

        // Atualizar info da página
        pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;

        // Ativar/desativar botões
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
    }

    // Event listeners para paginação
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

    // Render inicial
    renderTable();
});
