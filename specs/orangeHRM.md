# OrangeHRM Login Scenarios

## Application Overview

Test plan for the OrangeHRM login page covering initial load, successful authentication, validation errors, invalid credentials, and key edge cases. All scenarios assume a fresh browser session with cookies/storage cleared before each test.

## Test Scenarios

### 1. OrangeHRM Login Flow

**Seed:** `tests/seed.spec.ts`

#### 1.1. Page load and initial UI

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Open the OrangeHRM login URL in a fresh browser session.
    - expect: The page loads successfully.
    - expect: The login form is displayed with the OrangeHRM branding and title.
    - expect: The username field, password field, and Login button are visible.
  2. Inspect the visible elements on the login page.
    - expect: The page shows the Login heading.
    - expect: A hint with sample credentials is visible.
    - expect: The Forgot your password link is present.

#### 1.2. Valid user login

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Enter a valid username, for example Admin, into the username field.
    - expect: The value is accepted in the field.
  2. Enter a valid password, for example admin123, into the password field.
    - expect: The value is accepted in the field.
  3. Click the Login button.
    - expect: The user is redirected to the dashboard or home area.
    - expect: The dashboard content is visible.
    - expect: The user session is established.

#### 1.3. Empty username submission

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Leave the username field empty.
    - expect: The field remains empty.
  2. Enter a valid password, for example admin123, into the password field.
    - expect: The password value is accepted.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: A validation message appears for the username field.
    - expect: No dashboard navigation occurs.

#### 1.4. Empty password submission

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Enter a valid username, for example Admin, into the username field.
    - expect: The username value is accepted.
  2. Leave the password field empty.
    - expect: The password field remains empty.
  3. Click the Login button.
    - expect: The user remains on the login page.
    - expect: A validation message appears for the password field.
    - expect: No dashboard navigation occurs.

#### 1.5. Invalid credentials

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Enter a known valid username, for example Admin, into the username field.
    - expect: The username value is accepted.
  2. Enter an incorrect password, for example wrongpass, into the password field.
    - expect: The password value is accepted.
  3. Click the Login button.
    - expect: The login attempt is rejected.
    - expect: The user remains on the login page or receives an error message indicating invalid credentials.
    - expect: No dashboard navigation occurs.

#### 1.6. Edge cases and boundary conditions

**File:** `specs/orangeHRM.md`

**Steps:**
  1. Try submitting the form with whitespace-only values in both fields.
    - expect: The form should not authenticate successfully.
    - expect: Validation should prevent submission or show an error state.
  2. Try logging in using a mixed-case username such as admin instead of Admin, while keeping a valid password.
    - expect: The attempt should fail unless the application explicitly allows that value.
    - expect: The user should remain on the login page.
  3. Submit the form by pressing Enter from the password field after entering valid credentials.
    - expect: The login action is triggered through keyboard submission.
    - expect: The result should match the standard Login button behavior.
