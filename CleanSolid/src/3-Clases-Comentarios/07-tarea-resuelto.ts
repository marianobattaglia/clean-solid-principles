(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
    /**
     * Metodo 1: Por constructor
     * Este metodo va a requerir que al llamar la funcion se pase 
     * el nombre de cada parametro de la siguiente manera: 
     * "const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');"
     */
    // class InputElement {
    //     constructor(
    //         public html: HtmlElement,
    //         public attributes: InputAttributes,
    //         public events: InputEvents,
    //     ) {}
    // }

    /**
     * Metodo 2: Creando un nuevo elemento que agrupe
     * todas las propiedades anteriores
     */
    class InputElement {
        public html: HtmlElement;
        public attributes: InputAttributes;
        public events: InputEvents;

        constructor(value: string, placeholder: string, id: string) {
            this.html = new HtmlElement(id, 'input');
            this.attributes = new InputAttributes(value, placeholder);
            this.events = new InputEvents();
        }
    }

    // const nameField = new InputEvents('Fernando', 'Enter first name', 'txtName');
    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()