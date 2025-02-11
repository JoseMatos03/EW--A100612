document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 10;
    let currentPage = 1;
    let reparacoes = []; // This stores all records

    const tableBody = document.querySelector("#reparacoes-table tbody");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");
    const pageInfo = document.getElementById("page-info");

    // Fetch data from json-server
    axios.get("http://localhost:5000/reparacoes")
        .then(response => {
            reparacoes = response.data;
            updateTable();
        })
        .catch(error => console.error("Error fetching reparacoes:", error));

    function updateTable() {
        tableBody.innerHTML = ""; // Clear table before inserting new data

        const startIndex = (currentPage - 1) * itemsPerPage;
        const paginatedData = reparacoes.slice(startIndex, startIndex + itemsPerPage);

        paginatedData.forEach(reparacao => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${reparacao.nome}</td>
                <td>${reparacao.nif}</td>
                <td>${reparacao.data}</td>
                <td>${reparacao.viatura.marca}</td>
                <td>${reparacao.viatura.modelo}</td>
                <td>${reparacao.viatura.matricula}</td>
                <td>${reparacao.intervencoes.map(interv => `<span title="${interv.descricao}">${interv.nome}</span>`).join(", ")}</td>
            `;

            tableBody.appendChild(row);
        });

        updatePaginationControls();
    }

    function updatePaginationControls() {
        pageInfo.textContent = `Página ${currentPage} de ${Math.ceil(reparacoes.length / itemsPerPage)}`;

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage >= Math.ceil(reparacoes.length / itemsPerPage);
    }

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < Math.ceil(reparacoes.length / itemsPerPage)) {
            currentPage++;
            updateTable();
        }
    });
});
