<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script JS</title>
</head>
<body>

<h1>Liste des utilisateurs</h1>

<table id="usersTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<button id="updateBtn">Update</button>

<script>

    async function loadUsers() {
        try {

            const response = await fetch('users.php');
            const users = await response.json();

            const tbody = document.querySelector('#usersTable tbody');
            tbody.innerHTML = '';


            users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(row);
            });
        } catch (error) {
            console.error('Erreur lors du chargement des utilisateurs:', error);
        }
    }


    document.getElementById('updateBtn').addEventListener('click', loadUsers);


</html>