// 3. Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabets from a-z)


import java.util.Scanner;

public class PangramCheck {
      public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter  Value: ");
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String input) {
        for (char letter = 'a'; letter <= 'z'; letter ++) {
            if (input.indexOf(letter) == -1) {
                return false;
            }
        }
        return true;
    }

}





