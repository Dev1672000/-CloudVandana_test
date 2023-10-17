// 2. Enter Roman Number as input and convert it to integer. (ex IX = 9)



import java.util.Scanner;

public class IntegerToRoman {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();

        if (number < 1 || number > 3999) {
            System.out.println("Number out of valid range1 to 3999.");
        } else {
            String romanNumeral = intToRoman(number);
            System.out.println("Roman numeral: " + romanNumeral);
        }
    }

    public static String intToRoman(int num) {
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};

        StringBuilder roman = new StringBuilder();

        for (int i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                roman.append(symbols[i]);
                num -= values[i];
            }
        }

        return roman.toString();
    }
}


