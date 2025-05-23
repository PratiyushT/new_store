import {createClient} from '@supabase/supabase-js'
import {SUPABASE_ANON_KEY, SUPABASE_URL} from "../utils/env";

export const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
) 