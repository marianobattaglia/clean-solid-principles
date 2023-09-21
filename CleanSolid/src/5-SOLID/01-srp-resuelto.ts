(() => {

    interface Product { 
        id:   number;
        name: string;
    }


    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        /**
         * Se mueven los metodos save y load a una nueva clase 
         * encargada de realizar las peticiones.
         */
        // loadProduct( id: number ) {
        //     // Realiza un proceso para obtener el producto y retornarlo
        //     console.log('Producto: ',{ id, name: 'OLED Tv' });
        // }
        //
        // saveProduct( product: Product ) {
        //     // Realiza una petición para salvar en base de datos 
        //     console.log('Guardando en base de datos', product );
        // }
    
        /**
         * La notificación a los clientes no debería estar aca, 
         * se moverá a una nueva clase encargada de envio de correos.
         */
        // notifyClients() {
        //     console.log('Enviando correo a los clientes');
        // }
    
        /**
         * El metodo "onAddToCart" se mueve a una nueva clase
         */
        // onAddToCart( productId: number ) {
        //     // Agregar al carrito de compras
        //     console.log('Agregando al carrito ', productId );
        // }
        
    }

    /**
     * ===============================================================
     */


    /**
     * Creo una nueva clase para realizar todas las peticiones que se 
     * estaban centralizanod en "ProductBloc"
     */

    class ProductService {

        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product );
        }

    }


    /**
     * Se crea una clase para la notificación a los clientes
     */

    class Mailer {

        private masterEmail: string = 'fernando@google.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes', emailList, template);
        }

    }


    /**
     * Se crea una clase CartBloc colocando los metodos correspondientes
     */

    class CartBloc {

        private itemsInCart: Object[] = [];

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }

    }


    /**
     * LUEGO, para centralizar todas las clases en un nuevo ProductBloc2
     */

    class ProductBloc2 {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }

        /**
         * Las funciones que se encontraban en ProductBloc, internamente
         * llaman a las funciones de las clases correspondientes.
         */

        loadProduct( id: number ) {
            this.productService.getProduct(id)
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }

        notifyClients( emailList: string[], template: "to-clients" | "to-admins" ) {
            this.mailer.sendEmail(emailList, template)
        }

    }


    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc()

    // productBloc.loadProduct(10);
    // productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    // productBloc.notifyClients();
    // productBloc.onAddToCart(10);
    cartBloc.addToCart(10);


    /**
     * Inicialización de nueva clase, inyectando sus dependencias. 
     */
    const productService = new ProductService();
    const mailer = new Mailer();
    const productBloc2 = new ProductBloc2(productService, mailer);



})();