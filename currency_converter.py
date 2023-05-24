def load_data():
    # Loads data from a csv file, and returns a list data structure containing all data.
    file = input("Give name of the data file: ")
    data = []
    try:
        with open(file, "r") as f:
            for row in f:
                data.append(row.strip().split(";"))
    except:
        print("Error: No such file exists.")
        return None
    print("Data loaded successfully!")
    print("Currency exchange data is from {} days between {} and {}.\n".format(len(data) - 1, data[1][0], data[-1][0]))
    return data


def use_average(data):
    # Calculates and returns the average exchange rates of the data.
    average_rates = []
    length = len([row for row in data[1:] if row[1] != ""])
    for i in range(1, 4):
        average_rates.append(sum(float(row[i]) for row in data[1:] if row[i] != "") / length)
    return average_rates


def use_highest(data):
    # Calculates and returns the highest exchange rates of the data.
    highest_rates = []
    for i in range(1, 4):
        highest_rates.append(max(float(row[i]) for row in data[1:] if row[i] != ""))
    return highest_rates


def use_lowest(data):
    # Calculates and returns the lowest exchange rates of the data.
    lowest_rates = []
    for i in range(1, 4):
        lowest_rates.append(min(float(row[i]) for row in data[1:] if row[i] != ""))
    return lowest_rates


def convert_usd(data, rates, target):
    # Converts USD to the target currency.
    # data: a list containing all data.
    # rates: a list containing the exchange rates.
    # target: the target currency, either "EUR", "AUD" or "GBP".
    usd = float(input("Give USD to convert: "))
    if target == "EUR":
        print("{} USD in EUR is {:.2f} EUR\n".format(usd, usd * rates[0]))
    elif target == "AUD":
        print("{} USD in AUD is {:.2f} AUD\n".format(usd, usd * rates[1]))
    elif target == "GBP":
        print("{} USD in GBP is {:.2f} GBP\n".format(usd, usd * rates[2]))


def main():
    rates = []
    while True:
        print("ACME(tm) US DOLLAR EXCHANGE RATE APP")
        print("1) LOAD currency exchange rate data from a file")
        print("2) USE AVERAGE exchange rate")
        print("3) USE HIGHEST exchange rate")
        print("4) USE LOWEST exchange rate")
        print("5) CONVERT USD TO EUR")
        print("6) CONVERT USD TO AUD")
        print("7) CONVERT USD TO GBP")
        print("0) QUIT program")
        choice = input("Choose what to do: ")
        if choice == "1":
            data = load_data()
            if data is None:
                continue
            rates = use_average(data)
        elif choice == "2":
            try:
                rates = use_average(data)
                print("Using the average currency exchange rate.\n")
            except:
                print("Error: no data loaded.")

        elif choice == "3":
            try:
                rates = use_highest(data)
                print("Using the highest currency exchange rate.\n")
            except:
                print("Error: no data loaded.")
        elif choice == "4":
            try:
                rates = use_lowest(data)
                print("Using the lowest currency exchange rate.\n")
            except:
                print("Error: no data loaded.")
        elif choice == "5":
            try:
                convert_usd(data, rates, "EUR")
            except:
                print("Error: no data loaded.")
        elif choice == "6":
            try:
                convert_usd(data, rates, "AUD")
            except:
                print("Error: no data loaded.")
        elif choice == "7":
            try:
                convert_usd(data, rates, "GBP")
            except:
                print("Error: no data loaded.")
        elif choice == "0":
            break
        else:
            print("Error: invalid choice.")
main()

