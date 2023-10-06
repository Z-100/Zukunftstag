import static java.util.UUID.randomUUID;

public class Matrix {

    static String GRUEN = "\033[32m";

    public static void main(String[] args) {

        // Farbe auf Grün stellen
        System.out.println(GRUEN);

        // Die Schlaufe anfangen
        while (true) {

            // Die zufälligen Zeichen ausgeben
            System.out.println(randomUUID() + " " + randomUUID() + " " + randomUUID() + " " + randomUUID());
        }
    }
}
