
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klndatptwxaqnzxzyfsr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbmRhdHB0d3hhcW56eHp5ZnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjM0NjIsImV4cCI6MjAyOTY5OTQ2Mn0.aadCCItKJo0loZdLLMiTMoALOuYq1peV6RraySRwPic'
const supabase = createClient(supabaseUrl, supabaseKey)



//////////////// Add user 
async function add_user(info) {
    try {
        let { data, error } = await supabase
        .from('users')
        .insert(info)
        .select();

        return { data, error };
    } catch (error) {
        return { error: error.message };
    }
}

async function addTask(info) {
    try {
        let { data, error } = await supabase
        .from('task')
        .insert(info)
        .select();

        return { data, error };
    } catch (error) {
        return { error: error.message };
    }
}

export {add_user, addTask};