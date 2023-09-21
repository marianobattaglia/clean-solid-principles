(() => {

    /**
     * Todo el codigo de abajo NO aplica el "Principio de Responsabilidad Unica",
     * es repetitivo y muy dificil de comprender. 
     */

    type Gender = 'M'|'F';

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const newPerson = new Person('Fernando', 'M', new Date('1985-10-21'));
    console.log({ newPerson });

    //Creo clase "User" que extiende de "Person"
    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string, //Person
            gender: Gender, //Person
            birthdate: Date, //Person
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    

    // Creo una clase "UserSettings" que extiende de "User" (que a su vez extiende de "Person")
    class UserSettings extends User {
        
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'fernando@google.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    );
    console.log(userSettings, userSettings.checkCredentials(), );


})();