Neutralino.init()



function onWindowClose() {
    Neutralino.app.exit();
}

window.addEventListener('resize', adjustLeftSector);

function adjustLeftSector() {
  const centerSector = document.getElementById('windowCenterSector');
  const leftSector = document.getElementById('windowLeftSector');
  const rightSector = document.getElementById('windowRightSector');
  
  const centerSectorWidth = centerSector.offsetWidth;
  const halfCenterWidth = centerSectorWidth / 2;
  
  leftSector.style.right = `calc(50% + ${halfCenterWidth}px)`;
  rightSector.style.left = `calc(50% + ${halfCenterWidth}px)`;
}

// Llama a la función inicialmente para ajustar el tamaño al cargar la página
adjustLeftSector();

async function resizemain() {
    let status = await Neutralino.window.isMaximized();
    if (!status) {
        document.getElementById('resbtn').innerHTML = '<span class="sIcons">close_fullscreen</span>';
        Neutralino.window.maximize();
        
    } else {
        Neutralino.window.unmaximize();
        document.getElementById('resbtn').innerHTML = '<span class="sIcons">open_in_full</span>';
    }
};


document.addEventListener('DOMContentLoaded', () => {
    Neutralino.window.setDraggableRegion('appBar');
});


document.getElementById('closebtn').addEventListener('click', () => {
    Neutralino.app.exit();
  });
  
  document.getElementById('minbtn').addEventListener('click', () => {
      Neutralino.window.minimize();
      console.log('minimize');
  });

  document.getElementById('resbtn').addEventListener('click', () => {resizemain()});

  document.getElementById('appBar').addEventListener('dblclick', () => {resizemain()});




document.addEventListener('contextmenu', (e) => {
     e.preventDefault(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const contextMenu = document.getElementById('context-menu');
    const contextMenuItems = document.querySelectorAll('.context-menu-item');

    // Mostrar el menú contextual
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        contextMenu.style.top = `${event.pageY}px`;
        contextMenu.style.left = `${event.pageX}px`;
        contextMenu.style.display = 'block';
    });

    // Ocultar el menú contextual al hacer clic en cualquier otro lugar
    document.addEventListener('click', function() {
        contextMenu.style.display = 'none';
    });

    // Agregar funcionalidad a las opciones del menú
    contextMenuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            alert(`Seleccionaste ${event.target.textContent}`);
            contextMenu.style.display = 'none';
        });
    });
});

