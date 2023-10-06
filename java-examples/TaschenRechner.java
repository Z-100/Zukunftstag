import java.util.Scanner;

class TaschenRechner {

    public static void main(String[] args) {

        // Scanner erstellen
        Scanner scanner = new Scanner(System.in);

        // Zahlen einlesen
        System.out.println("Gib die erste Zahl ein");
        String zahl1Text = scanner.nextLine();

        System.out.println("Gib die zweite Zahl ein");
        String zahl2Text = scanner.nextLine();

        // Rechnen Operation einlesen: 1, 2, 3 oder 4
        System.out.println("""
                Was willst du rechnen?
                (1) + Addieren
                (2) - Subtrahieren
                (3) * Multiplizieren
                (3) / Dividieren""");
        String funktion = scanner.nextLine();

        // Text zu zahlen konvertieren
        int zahl1 = Integer.parseInt(zahl1Text);
        int zahl2 = Integer.parseInt(zahl2Text);

        // Operation auswählen
        // und dann rechnen
        int resultat = switch (funktion) {
            case "1" -> zahl1 + zahl2;
            case "2" -> zahl1 - zahl2;
            case "3" -> zahl1 * zahl2;
            case "4" -> zahl1 / zahl2;
            default -> 0;
        };

        // Resultat ausgeben
        System.out.println(resultat);
    }
}
