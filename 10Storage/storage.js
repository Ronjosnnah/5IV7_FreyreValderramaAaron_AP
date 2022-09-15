

const Storage = () => 
{
    class StorageTodoAppHelper
    {
        constructor(storageName, initialValue)
        {
            let currentStorage = local.getItem(storageName);
            if(!currentStorage)
            {
                localStorage.setItem(storageName, JSON.stringify(initialValue));
                currentStorage = initialValue;
            }
            else
            {
                currentStorage = JSON.parse(currentStorage);
            }

            this._storageName = storageName;
            this._currentValues = currentStorage;
        }

        addItem(newItem)
        {
            this._currentValues.push(newItem);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItem(findFunction)
        {
            return this._currentValues.find(findFunction);
        }

        updateItem(findFunction, newItem)
        {
            const itemIndex = this._currentValues.findIndex(findFunction);
            this._currentValues[itemIndex] = {...this._currentValues[itemIndex], ...newItem};
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }

        getItem()
        {
            return this._currentValues;
        }

        deleteItem(findFunction)
        {
            this._currentValues.splice(this._currentValues.findIndex(findFunction), 1);
            localStorage.setItem(this._storageName, JSON.stringify(this._currentValues));
        }
    }


    const loadListItemTemplate = () =>
    {
        const templateDomItem = document.getElementById("listItemTemplate")
        const template = templateDomItem.innerHTML.trim()

        templateDomItem.remove();
        return template;
    }

    const DOMElements = 
    {
        taskName : document.getElementById("txtTaskName"),
        addButon : document.getElementById("btnAddTask"),
        taskList : document.getElementById("taskList"),
        changeWallpaperButton : document.getElementById("btnChangeWallpaper"),
        editUser : document.getElementById("editUser")
    }

    const listItemTemplate = loadListItemTemplate();
    const storage = new StorageTodoAppHelper("Storage", []);

    const toggleTask = (domItem) => 
    {
        if(domItem)
        {
            storage.updateItem((item) => item.id === +domItem.id, {completed: !domItem.classList.contains("completed")});
        }
        if(!domItem.classList.contains("completed"))
        {
            domItem.classList.addList.add("completed");
        }
        else
        {
            domItem.classList.addList.remove("completed");
        }
    }

    const deleteTask = (domItem) =>
    {
        if(domItem)
        {
            storage.deleteItem((item) => item.id === + domItem.id) 
        }
        domItem.parentElement.remove();
    }

    const createDOMTaskElement = (task) =>
    {
        const template = document.createElement('li');
        template.innerHTML = listItemTemplate.replace("{id}", task.id).replace("{template}", task.value).replace("{completed}", task.completed ? "completed" : "");


        const ourContent = template.firstChild;

        ourContent.childNodes.forEach(child => {
            // arreglar el operador ternario
            if(child.classList?.contains("complete"))
            {
                child.onclick = () => toggleTask(ourContent)
            }
            if(child.classList?.contains("delete"))
            {
                child.onclick = () => deleteTask(ourContent)
            }
        });
        
        DOMElements.taskList.append(template);
    }
// no cambiar
    const renderTask = () =>
    {
        DOMElements.taskList.innerHTML = storage.getItems() ? "" : "<li> No hay tareas aun </li>"

        storage.getItems().forEach(task => createDOMTaskElement(task));
    }

    const addTask = () =>
    {
        if(DOMElements.taskName.value)
        {
            const newTask =
            {
                id: Date.now,
                value : DOMElements.taskName.value,
                completed : false
            }

            storage.addItem(newTask);
            DOMElements.taskName.value = "";
            createDOMTaskElement(newTask);
        }
    }

    const requestUser = async () =>
    {
        const {value : userName} = await Swal.fire({
            input : 'text',
            inputLabel : 'Introduce tu nombre',
            allowOutsideClick : false,
            allowEscapeKey : false,
            inputValidador : (value) => 
            {
                if(!value?.trim())
                {
                    return 'Introduce tu nombre!'
                }
            },
            inputPlaceHolder : 'Introduce tu nombre'
        });

        if(userName)
        {
            localStorage.setItem("userName", userName);
            document.getElementById("title").innerHTML = `Bienvenido ${userName}!`;
        }
    }

    const changeWallpaper = async () =>
    {
        const {value : url} = await Swal.fire({
            input : 'url',
            inputLabel : 'Introduce la URL del wallpaper',
            inputPlaceHolder : 'Introduce la URL del wallpaper',
            validationMessage : 'La URL no es valida',
        })

        if(url)
        {
            localStorage.setItem("wallpaper", url),
            document.querySelector("body").style.background = `url(${url}) no-repeat center`;
        }
    }



}