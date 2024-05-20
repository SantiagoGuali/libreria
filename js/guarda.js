function guardar()
{
    var combogen = document.getElementById("genero_libro");
    var combodis = document.getElementById("Disponibilidad_libro");
    var comboidi = document.getElementById("Idioma");

    db.collection("Libros").add
    ({
        id_libro: document.getElementById("id_libro").value,
        autor_libro: document.getElementById("autor_libro").value,
        editorial_libro: document.getElementById("editorial_libro").value,
        genero_libro: combogen.options[combogen.selectedIndex].text,
        Disponibilidad_libro: combodis.options[combodis.selectedIndex].text,
        nombre_libro: document.getElementById("nombre_libro").value,
        paginasN_libro: document.getElementById("paginasN_libro").value,
        fechaP_libro: document.getElementById("fechaP_libro").value,
        Idioma: comboidi.options[comboidi.selectedIndex].text,
        descripcion_libro: document.getElementById("descripcion_libro").value,
    })
    .then((docRef) => {
        alert("Guardado correctamente");
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        alert("Error Guardar");
        console.error("Error adding document: ", error);
    });
}


// aun no funciona 
function search()
{
    db.collection("Libros").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            (document.getElementById('id_libro')).value = (`${doc.data().id_libro}`);
            (document.getElementById('autor_libro')).value = (`${doc.data().autor_libro}`);
            (document.getElementById('editorial_libro')).value = (`${doc.data().editorial_libro}`);
            (document.getElementById('genero_libro')).value = (`${doc.data().genero_libro}`);
            (document.getElementById('Disponibilidad_libro')).value = (`${doc.data().Disponibilidad_libro}`);
            (document.getElementById('nombre_libro')).value = (`${doc.data().nombre_libro}`);
            (document.getElementById('paginasN_libro')).value = (`${doc.data().paginasN_libro}`);
            (document.getElementById('fechaP_libro')).value = (`${doc.data().fechaP_libro}`);
            (document.getElementById('Idioma')).value = (`${doc.data().Idioma}`);
            (document.getElementById('descripcion_libro')).value = (`${doc.data().des}`);
        });
    });
}


function verTabla() {
    db.collection("Libros").get().then((querySnapshot) => {
        const librosTbody = document.getElementById('libros-tbody');
        librosTbody.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const libro = doc.data();
            const libroRow = document.createElement('tr');
            libroRow.innerHTML = `
                <td>${libro.nombre_libro}</td>
                <td>${libro.autor_libro}</td>
                <td>${libro.Idioma}</td>
                <td>${libro.descripcion_libro}</td>
                <td>${libro.editorial_libro}</td>
                <td>${libro.fechaP_libro}</td>
                <td>${libro.genero_libro}</td>
                <td>${libro.Disponibilidad_libro}</td>
                <td>${libro.paginasN_libro}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm" onclick="deleteLibro('${doc.id}')">Eliminar</button>
                   
                </td>
                <td><button class="btn btn-outline-success btn-sm" onclick="editLibro('${doc.id}')">Actualizar</button></td>
                
            `;
            librosTbody.appendChild(libroRow);
        });
    });
}



function editLibro(id) {
    const libroDoc = db.collection("Libros").doc(id);
    libroDoc.get().then((doc) => {
        if (doc.exists) {
            const libro = doc.data();
            document.getElementById('libro-id').value = id;
            document.getElementById('nombre-libro').value = libro.nombre_libro;
            document.getElementById('autor-libro').value = libro.autor_libro;
            document.getElementById('idioma-libro').value = libro.Idioma;
            document.getElementById('descripcion-libro').value = libro.descripcion_libro;
            document.getElementById('editorial-libro').value = libro.editorial_libro;
            document.getElementById('fechaP-libro').value = libro.fechaP_libro;
            document.getElementById('genero-libro').value = libro.genero_libro;
            document.getElementById('disponibilidad-libro').value = libro.Disponibilidad_libro;
            document.getElementById('paginasN-libro').value = libro.paginasN_libro;
            $('#updateModal').modal('show');
             
        }
    });
}


function updateLibro() {
    const id = document.getElementById('libro-id').value;
    const libroActualizado = {
        nombre_libro: document.getElementById('nombre-libro').value,
        autor_libro: document.getElementById('autor-libro').value,
        Idioma: document.getElementById('idioma-libro').value,
        descripcion_libro: document.getElementById('descripcion-libro').value,
        editorial_libro: document.getElementById('editorial-libro').value,
        fechaP_libro: document.getElementById('fechaP-libro').value,
        genero_libro: document.getElementById('genero-libro').value,
        Disponibilidad_libro: document.getElementById('disponibilidad-libro').value,
        paginasN_libro: document.getElementById('paginasN-libro').value
    };
    db.collection("Libros").doc(id).update(libroActualizado).then(() => {
        $('#updateModal').modal('hide');
        alert("Datos actualizados correctamente");
        verTabla();
    }).catch((error) => {
        console.error("Error al actualizar el libro: ", error);
    });
}

function deleteLibro(id) {
    db.collection("Libros").doc(id).delete().then(() => {
        verTabla();
    }).catch((error) => {
        console.error("Error al eliminar el libro: ", error);
    });
}

function btclose()
{
    $('#updateModal').modal('hide');
}


