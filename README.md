# Peachtree Bank - A Dummy: Make a Transaction

A dummy frontend without any backend capablity, made with Angular 10.

The app is built to consider the data from mockdata static file,
if data provided in such format through API's , apis can be consumed easily and do a build using a specific API or ENV.

### Followed Best Practises:

[x] Linting
[x] Tests
[x] pre-commit, pre-push hooks
etc.

NOTE: Tried to define a few todo and are tracked below the one which are completed.

### Whats In & Todo?

As a product owner, One should see a consistent layout where One can view the header with my bank's logo and the footer.

[x]

1. Final layout should match with the designs provided
2. Header and footer should be visible with the Peachtree Bank logo
3. Use UI components (logo and footer)

### User story #2

As a user, One should be able to transfer money from my account using a Transfer Money Form.

[x]

1. Final layout should match with the designs provided
2. "From account" field should be prefilled with my account details and disabled.
3. There should not be any validations on "To account" input field except it is a mandatory field.
4. Following field validations should exist on "Amount" input field

   a. It is a mandatory field

   b. Negative numbers are not allowed

   c. Decimals are permitted

   b. Maintain atleast €500 in account

5. Submitting form should open a modal to review transfer(check User Story #3).
6. Use UI Component (submit button)

### User story #3

As a user, One should be able to review my transfer before submitting it.

[x]

1. Final layout should match with the designs provided
2. Modal should close when a user submits the transfer or cancels it.
3. Submitting transfer should successfully make a transfer and update the transactions list
4. Input fields should be reset to their original state after successfully submitting the transfer.
5. Cancelling a transfer should not reset the transfer form.

### User story #4

As a user, One should be able to view a list of historical transactions in an ordered list.

[x]

1. Final layout should match with the designs provided
2. Use the attached mock JSON data as an alternative if the above location is unavailable
3. Transactions list should be sorted by date in descending order
4. Use UI Component (transaction-item)

### User story #5

As a user, One should be able to filter my transactions based on merchant name.

[x]

1. Final layout should match with the designs provided
2. Filtering should be done only by merchant name
3. Creating a new transfer should not alter the state of filter i.e if One make a transfer, it should automatically reflect in the filtered list(if applicable)
4. Use UI Component (filter)

### Tech Spike

As a developer, One want to have unit tests & linting in place.

[x]

1. Use Angular's OOTB lint configuration
2. Should add unit tests for custom logic(components, services or pipes) added
3. Make sure all tests are running successfully
