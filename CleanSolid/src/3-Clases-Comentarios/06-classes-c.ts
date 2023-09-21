(() => {

    /**
     * Refactorización aplicando "Principio de Responsabilidad Unica".
     * Priorizar la composición frente a la herencia. 
     * Se eliminan herencias que traen propiedades que no se necesitan. 
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
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        //Coloco primero las propiedades de UserProps
        constructor({
            email,
            role,
        }: UserProps ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }
    }
    
    //Creo una interface para "UserSettingsProps"
    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor({
            lastOpenFolder,
            workingDirectory,
        }: SettingsProps) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    /**
     * Creo una clase "UserSettings" que va a ser
     * una composición de todas las otras clases
     */
    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({name, gender, birthdate, email, role, lastOpenFolder, workingDirectory }: UserSettingsProps){
            this.person = new Person({ name, gender, birthdate});
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workingDirectory });
        }
    }

    //Desestructurar mejor un objeto
    /**
     * Este va a logear por separado estos tres objetos:
     *  - person
     *  - settings
     *  - user
     */
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