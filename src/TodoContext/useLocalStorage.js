import React from 'react';

/*SETEAMOS NUESTRO CUSTOM HOOK PARA USARLO EN LOS CAMBIOS AL LOCAL STORAGE*/
function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(()=>{
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;
                parsedItem = localStorageItem ? JSON.parse(localStorageItem) : initialValue;
                /* if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                } */
                setItem(parsedItem);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }, 1000)
    })

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(error) {
            setError(error);
        }
    };

    return {item, saveItem, loading, error, };  // por convención cuando hay más de un Custom Hook en una función se usarán objetos y no arrays.
}

export { useLocalStorage };