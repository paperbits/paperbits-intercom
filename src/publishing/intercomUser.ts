/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

 
export interface IntercomUser {
    /**
     * Full name of signed-in user, e.g. Jane Doe
     */
    name?: string;
    /**
     * Email address of signed-in user, e.g. customer@example.com
     */
    email?: string;
    /**
     * Signup date as a Unix timestamp, e.g. 1312182000
     */
    createdAt?: "1312182000";
}
