(() => {

    /**
     * Refactorización aplicando "interfaces",
     */

    type Gender = 'M'|'F';

    //Creo una interface (~= protocol)
    interface PersonProps {
        name: string,
        gender: Gender,
        birthdate: Date,
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        //Coloco las propiedades desestructurando desde "PersonProps"
        constructor({ name, gender, birthdate }: PersonProps ){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    //Desestructurar mejor un objeto
    const newPerson = new Person({
        name: 'Fernando', 
        gender: 'M', 
        birthdate: new Date('1985-10-21')
    });
    console.log({ newPerson });

    //Creo una interface para "UserProps"
    interface UserProps {
        email: string,
        role: string,
        name: string,
        gender: Gender,
        birthdate: Date,
    }

    class User extends Person {
        public email: string;
        public role: string;
        public lastAccess: Date;

        //Coloco primero las propiedades de UserProps
        constructor({
            birthdate,
            email,
            gender,
            name,
            role,
        }: UserProps ) {
            super({ name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
    }
    
    //Creo una interface para "UserSettingsProps"
    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthdate,
        }: UserSettingsProps) {
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    //Desestructurar mejor un objeto
    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'fernando@google.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1985-10-21')
    });
    console.log(userSettings );


})();