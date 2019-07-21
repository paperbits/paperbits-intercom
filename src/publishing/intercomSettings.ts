/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */


import { IntercomUser } from "./intercomUser";

/**
 * Settings required to bootstrap Intercom client.
 */
export interface IntercomSettings {
    /**
     * Intercom applicationn ID.
     */
    appId: string;

    /**
     * Signed-in user.
     */
    user?: IntercomUser;
}