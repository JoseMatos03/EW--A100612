document.addEventListener("DOMContentLoaded", function () {
    const alunosData = document.getElementById("alunos-data").textContent;
    const alunos = JSON.parse(alunosData);

    const tableBody = document.getElementById("table-body");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    let currentPage = 1;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(alunos.length / itemsPerPage);

    function renderTable() {
        // Limpar a tabela
        tableBody.innerHTML = "";

        // Paginação
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedData = alunos.slice(start, end);

        // Preencher a tabela
        paginatedData.forEach(aluno => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.dataNasc}</td>
                <td>${aluno.curso}</td>
                <td>${aluno.anoCurso}</td>
                <td>${aluno.instrumento}</td>
            `;

            // Adiciona estilo de cursor pointer para indicar que a linha é clicável
            row.style.cursor = "pointer";

            row.addEventListener("click", () => {
                window.location.href = `/alunos/${aluno.id}`;
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
